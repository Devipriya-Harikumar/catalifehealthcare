import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Calculator } from "lucide-react";

export function BMICalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState("");

  const calculateBMI = () => {
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);

    if (weightNum > 0 && heightNum > 0) {
      // Convert height from cm to meters
      const heightInMeters = heightNum / 100;
      // Calculate BMI
      const bmiValue = weightNum / (heightInMeters * heightInMeters);
      setBmi(parseFloat(bmiValue.toFixed(1)));

      // Determine category
      if (bmiValue < 18.5) {
        setCategory("Underweight");
      } else if (bmiValue >= 18.5 && bmiValue < 25) {
        setCategory("Normal Weight");
      } else if (bmiValue >= 25 && bmiValue < 30) {
        setCategory("Overweight");
      } else {
        setCategory("Obese");
      }
    }
  };

  const resetCalculator = () => {
    setWeight("");
    setHeight("");
    setBmi(null);
    setCategory("");
  };

  const getCategoryColor = () => {
    if (category === "Underweight") return "text-yellow-600";
    if (category === "Normal Weight") return "text-green-600";
    if (category === "Overweight") return "text-orange-600";
    if (category === "Obese") return "text-red-600";
    return "";
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">BMI Calculator</h2>
          <p className="text-lg text-gray-600">
            Calculate your Body Mass Index to understand your health status
          </p>
        </div>

        <Card className="max-w-xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="h-5 w-5 text-primary" />
              Calculate Your BMI
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="weight">Weight (kg)</Label>
                <Input
                  id="weight"
                  type="number"
                  placeholder="Enter your weight in kilograms"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  min="0"
                  step="0.1"
                />
              </div>

              <div>
                <Label htmlFor="height">Height (cm)</Label>
                <Input
                  id="height"
                  type="number"
                  placeholder="Enter your height in centimeters"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  min="0"
                  step="0.1"
                />
              </div>

              <div className="flex gap-3">
                <Button 
                  onClick={calculateBMI} 
                  className="flex-1 bg-primary hover:bg-primary/90"
                  disabled={!weight || !height}
                >
                  Calculate BMI
                </Button>
                <Button 
                  onClick={resetCalculator} 
                  variant="outline"
                  className="flex-1"
                >
                  Reset
                </Button>
              </div>
            </div>

            {bmi !== null && (
              <div className="mt-6 p-6 bg-gray-50 rounded-lg text-center space-y-3">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Your BMI is</p>
                  <p className="text-4xl font-bold text-primary">{bmi}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Category</p>
                  <p className={`text-2xl font-semibold ${getCategoryColor()}`}>
                    {category}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600 mb-2">BMI Categories:</p>
                  <div className="text-xs text-gray-600 space-y-1">
                    <p>Underweight: BMI &lt; 18.5</p>
                    <p>Normal Weight: BMI 18.5 - 24.9</p>
                    <p>Overweight: BMI 25 - 29.9</p>
                    <p>Obese: BMI &ge; 30</p>
                  </div>
                </div>
              </div>
            )}

            <div className="text-sm text-gray-600 text-center mt-4">
              <p>
                Note: BMI is a screening tool. Please consult with Dr. Vishnu Radhakrishnan 
                for a comprehensive health assessment.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}