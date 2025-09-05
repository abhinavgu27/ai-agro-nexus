import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { Calculator, MapPin, Calendar, Thermometer } from "lucide-react";

const PredictionForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [prediction, setPrediction] = useState<number | null>(null);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setProgress(0);
    setPrediction(null);

    // Simulate AI processing
    const interval = setInterval(() => {
      setProgress(prev => {
        const next = prev + 10;
        if (next >= 100) {
          clearInterval(interval);
          setIsLoading(false);
          const randomYield = Math.floor(Math.random() * 30 + 20); // 20-50 tons per hectare
          setPrediction(randomYield);
          toast({
            title: "Prediction Complete",
            description: `AI analysis completed successfully. Predicted yield: ${randomYield} tons/hectare`,
          });
          return 100;
        }
        return next;
      });
    }, 200);
  };

  return (
    <section className="py-16 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Crop Yield Prediction Tool</h2>
            <p className="text-lg text-muted-foreground">
              Enter your farming parameters to get AI-powered yield predictions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Form */}
            <Card className="p-8 shadow-elegant">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex items-center mb-6">
                  <Calculator className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-xl font-semibold">Farm Parameters</h3>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="crop-type">Crop Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select crop" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="wheat">Wheat</SelectItem>
                        <SelectItem value="rice">Rice</SelectItem>
                        <SelectItem value="corn">Corn</SelectItem>
                        <SelectItem value="sugarcane">Sugarcane</SelectItem>
                        <SelectItem value="cotton">Cotton</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="area">Farm Area (hectares)</Label>
                    <Input id="area" type="number" placeholder="e.g., 10" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="location">
                      <MapPin className="h-4 w-4 inline mr-2" />
                      Location
                    </Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select district" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="agra">Agra</SelectItem>
                        <SelectItem value="lucknow">Lucknow</SelectItem>
                        <SelectItem value="kanpur">Kanpur</SelectItem>
                        <SelectItem value="varanasi">Varanasi</SelectItem>
                        <SelectItem value="meerut">Meerut</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="season">
                      <Calendar className="h-4 w-4 inline mr-2" />
                      Growing Season
                    </Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select season" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="kharif">Kharif (Summer)</SelectItem>
                        <SelectItem value="rabi">Rabi (Winter)</SelectItem>
                        <SelectItem value="zaid">Zaid (Spring)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="rainfall">
                      <Thermometer className="h-4 w-4 inline mr-2" />
                      Expected Rainfall (mm)
                    </Label>
                    <Input id="rainfall" type="number" placeholder="e.g., 800" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="temperature">Avg Temperature (°C)</Label>
                    <Input id="temperature" type="number" placeholder="e.g., 25" />
                  </div>
                </div>

                {isLoading && (
                  <div className="space-y-2">
                    <Label>AI Processing</Label>
                    <Progress value={progress} className="w-full" />
                    <p className="text-sm text-muted-foreground">Analyzing data...</p>
                  </div>
                )}

                <Button type="submit" variant="government" className="w-full" disabled={isLoading}>
                  {isLoading ? "Processing..." : "Predict Yield"}
                </Button>
              </form>
            </Card>

            {/* Results */}
            <Card className="p-8 shadow-elegant">
              <h3 className="text-xl font-semibold mb-6">Prediction Results</h3>
              
              {prediction ? (
                <div className="space-y-6">
                  <div className="text-center p-6 bg-primary/10 rounded-lg">
                    <div className="text-4xl font-bold text-primary mb-2">{prediction}</div>
                    <div className="text-lg text-foreground">tons per hectare</div>
                    <div className="text-sm text-muted-foreground mt-2">Expected yield based on AI analysis</div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between p-4 bg-muted rounded-lg">
                      <span className="font-medium">Confidence Level</span>
                      <span className="text-primary font-semibold">87%</span>
                    </div>
                    <div className="flex justify-between p-4 bg-muted rounded-lg">
                      <span className="font-medium">Market Value</span>
                      <span className="text-accent font-semibold">₹{(prediction * 25000).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between p-4 bg-muted rounded-lg">
                      <span className="font-medium">Recommendations</span>
                      <span className="text-primary font-semibold">Available</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12 text-muted-foreground">
                  <Calculator className="h-16 w-16 mx-auto mb-4 opacity-50" />
                  <p>Fill out the form to get your crop yield prediction</p>
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PredictionForm;