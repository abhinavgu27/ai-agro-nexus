import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Play, Pause, RotateCcw, Cpu, BarChart3, CheckCircle } from "lucide-react";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DemoModal = ({ isOpen, onClose }: DemoModalProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const demoSteps = [
    {
      title: "Data Input",
      description: "Enter your farm parameters including crop type, area, location, and weather conditions",
      icon: BarChart3,
      duration: 3000,
    },
    {
      title: "AI Processing",
      description: "Our advanced machine learning algorithms analyze your data against historical patterns",
      icon: Cpu,
      duration: 4000,
    },
    {
      title: "Yield Prediction",
      description: "Get accurate yield predictions with confidence levels and market value estimates",
      icon: CheckCircle,
      duration: 2000,
    },
  ];

  const startDemo = () => {
    setIsPlaying(true);
    setCurrentStep(0);
    setProgress(0);
    runStep(0);
  };

  const runStep = (stepIndex: number) => {
    if (stepIndex >= demoSteps.length) {
      setIsPlaying(false);
      setProgress(100);
      return;
    }

    const step = demoSteps[stepIndex];
    const interval = setInterval(() => {
      setProgress(prev => {
        const increment = 100 / (step.duration / 100);
        const next = prev + increment;
        
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setCurrentStep(stepIndex + 1);
            setProgress(0);
            runStep(stepIndex + 1);
          }, 500);
          return 100;
        }
        return next;
      });
    }, 100);
  };

  const resetDemo = () => {
    setIsPlaying(false);
    setCurrentStep(0);
    setProgress(0);
  };

  const pauseDemo = () => {
    setIsPlaying(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl">AI Prediction Demo</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <Card className="p-6">
            <div className="text-center mb-6">
              <h3 className="text-lg font-semibold mb-2">How AI Crop Yield Prediction Works</h3>
              <p className="text-muted-foreground">Watch how our AI analyzes your farm data to predict yields</p>
            </div>
            
            <div className="space-y-4">
              {demoSteps.map((step, index) => {
                const Icon = step.icon;
                const isActive = index === currentStep;
                const isCompleted = index < currentStep;
                
                return (
                  <div key={index} className={`flex items-center space-x-4 p-4 rounded-lg border ${
                    isActive ? 'border-primary bg-primary/5' : 
                    isCompleted ? 'border-green-500 bg-green-50' : 
                    'border-muted'
                  }`}>
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      isActive ? 'bg-primary text-primary-foreground' :
                      isCompleted ? 'bg-green-500 text-white' :
                      'bg-muted text-muted-foreground'
                    }`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h4 className="font-semibold">{step.title}</h4>
                        {isCompleted && <CheckCircle className="h-4 w-4 text-green-500" />}
                        {isActive && <Badge variant="default">Processing</Badge>}
                      </div>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                      {isActive && isPlaying && (
                        <Progress value={progress} className="mt-2" />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
          
          <div className="flex justify-center space-x-3">
            {!isPlaying ? (
              <Button onClick={startDemo} variant="government">
                <Play className="h-4 w-4 mr-2" />
                Start Demo
              </Button>
            ) : (
              <Button onClick={pauseDemo} variant="outline">
                <Pause className="h-4 w-4 mr-2" />
                Pause
              </Button>
            )}
            
            <Button onClick={resetDemo} variant="outline">
              <RotateCcw className="h-4 w-4 mr-2" />
              Reset
            </Button>
          </div>
          
          {currentStep >= demoSteps.length && (
            <Card className="p-6 text-center bg-green-50 border-green-200">
              <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-green-700 mb-2">Demo Complete!</h3>
              <p className="text-green-600 mb-4">
                You've seen how our AI processes farm data to provide accurate yield predictions.
              </p>
              <Button variant="government" onClick={onClose}>
                Try It Now
              </Button>
            </Card>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DemoModal;