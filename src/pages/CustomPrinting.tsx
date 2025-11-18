import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ModelBuilder } from "@/components/ModelBuilder";
import { AuthModal } from "@/components/AuthModal";
import { useDropzone } from "react-dropzone";
import { Upload, Loader2, Sparkles } from "lucide-react";
import { toast } from "sonner";

const CustomPrinting = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [dimensions, setDimensions] = useState({ length: "", width: "", height: "" });
  const [estimatedCost, setEstimatedCost] = useState<number | null>(null);
  const [isEstimating, setIsEstimating] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setUploadedFile(acceptedFiles[0]);
      toast.success("Model uploaded successfully!");
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'model/stl': ['.stl'],
      'model/obj': ['.obj'],
    },
    maxFiles: 1,
  });

  const handleEstimate = () => {
    if (!uploadedFile) {
      toast.error("Please upload a 3D model first");
      return;
    }

    if (!dimensions.length || !dimensions.width || !dimensions.height) {
      toast.error("Please enter all dimensions");
      return;
    }

    setIsEstimating(true);

    // Simulate AI cost estimation
    setTimeout(() => {
      const volume = parseFloat(dimensions.length) * parseFloat(dimensions.width) * parseFloat(dimensions.height);
      const baseCost = 50;
      const volumeCost = volume * 2.5;
      const complexityFactor = 1.2;
      const estimated = Math.round((baseCost + volumeCost) * complexityFactor);

      setEstimatedCost(estimated);
      setIsEstimating(false);
      toast.success("Cost estimated successfully!");
    }, 2000);
  };

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      setShowAuthModal(true);
    } else {
      toast.success("Added to cart! You'll receive a final quote via email.");
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 gradient-subtle">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-display text-5xl md:text-6xl mb-6">
              Custom 3D Printing Service
            </h1>
            <p className="text-xl text-muted-foreground">
              Upload your model, specify dimensions, and get an instant AI-powered cost estimate.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column - 3D Viewer */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="font-display">3D Model Builder</CardTitle>
                  <CardDescription>
                    Create custom models using basic shapes or upload your own
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ModelBuilder />
                </CardContent>
              </Card>
            </motion.div>

            {/* Right Column - Upload & Dimensions */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Upload Section */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-display">Upload Model</CardTitle>
                  <CardDescription>
                    Support for .STL and .OBJ files
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div
                    {...getRootProps()}
                    className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-smooth ${
                      isDragActive
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <input {...getInputProps()} />
                    <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                    {uploadedFile ? (
                      <div>
                        <p className="font-semibold text-primary">{uploadedFile.name}</p>
                        <p className="text-sm text-muted-foreground">Click to change</p>
                      </div>
                    ) : (
                      <div>
                        <p className="text-foreground mb-2">
                          Drop your 3D model here, or click to browse
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Supports .STL and .OBJ files
                        </p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Dimensions Section */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-display">Dimensions (mm)</CardTitle>
                  <CardDescription>
                    Enter the final desired dimensions for your print
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="length">Length</Label>
                      <Input
                        id="length"
                        type="number"
                        placeholder="100"
                        value={dimensions.length}
                        onChange={(e) =>
                          setDimensions({ ...dimensions, length: e.target.value })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="width">Width</Label>
                      <Input
                        id="width"
                        type="number"
                        placeholder="100"
                        value={dimensions.width}
                        onChange={(e) =>
                          setDimensions({ ...dimensions, width: e.target.value })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="height">Height</Label>
                      <Input
                        id="height"
                        type="number"
                        placeholder="100"
                        value={dimensions.height}
                        onChange={(e) =>
                          setDimensions({ ...dimensions, height: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <Button
                    onClick={handleEstimate}
                    disabled={isEstimating}
                    variant="premium"
                    className="w-full"
                  >
                    {isEstimating ? (
                      <>
                        <Loader2 className="animate-spin" />
                        AI is thinking...
                      </>
                    ) : (
                      <>
                        <Sparkles />
                        Get AI Cost Estimate
                      </>
                    )}
                  </Button>

                  {estimatedCost && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-6 rounded-lg gradient-warm text-primary-foreground text-center"
                    >
                      <p className="text-sm mb-2">Estimated Cost</p>
                      <p className="font-display text-4xl">₹{estimatedCost.toLocaleString()}</p>
                      <p className="text-sm mt-2 opacity-90">
                        Final price will be confirmed via email
                      </p>
                    </motion.div>
                  )}

                  {estimatedCost && (
                    <Button
                      onClick={handleAddToCart}
                      variant="hero"
                      className="w-full"
                    >
                      Submit for Final Quote
                    </Button>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onSuccess={() => {
          setIsAuthenticated(true);
          toast.success("Your quote request has been submitted! Check your email for the final price.");
        }}
      />
    </div>
  );
};

export default CustomPrinting;
