import { useState, useCallback } from 'react';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { 
  Calculator, 
  RotateCcw, 
  Info, 
  Lightbulb, 
  CheckCircle2,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { Separator } from '@/components/ui/separator';

interface Step {
  number1: number;
  number2: number;
  remainder: number;
  quotient: number;
}

export function HCFTool() {
  const [num1, setNum1] = useState<string>('');
  const [num2, setNum2] = useState<string>('');
  const [result, setResult] = useState<number | null>(null);
  const [steps, setSteps] = useState<Step[]>([]);
  const [error, setError] = useState<string>('');
  const [showExplanation, setShowExplanation] = useState(false);

  const calculateHCF = useCallback((a: number, b: number): { hcf: number; steps: Step[] } => {
    const calculationSteps: Step[] = [];
    let x = Math.abs(a);
    let y = Math.abs(b);

    while (y !== 0) {
      const remainder = x % y;
      const quotient = Math.floor(x / y);
      calculationSteps.push({ number1: x, number2: y, remainder, quotient });
      x = y;
      y = remainder;
    }

    return { hcf: x, steps: calculationSteps };
  }, []);

  const handleCalculate = () => {
    setError('');
    setResult(null);
    setSteps([]);

    const n1 = parseInt(num1, 10);
    const n2 = parseInt(num2, 10);

    if (isNaN(n1) || isNaN(n2)) {
      setError('Please enter valid numbers');
      return;
    }

    if (n1 === 0 && n2 === 0) {
      setError('HCF of 0 and 0 is undefined');
      return;
    }

    const { hcf, steps: calculationSteps } = calculateHCF(n1, n2);
    setResult(hcf);
    setSteps(calculationSteps);
  };

  const handleReset = () => {
    setNum1('');
    setNum2('');
    setResult(null);
    setSteps([]);
    setError('');
    setShowExplanation(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCalculate();
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
            <Calculator className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-3">HCF Calculator</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Calculate the Highest Common Factor (HCF) or Greatest Common Divisor (GCD) 
            of two numbers using the Euclidean algorithm.
          </p>
        </div>

        {/* Main Calculator Card */}
        <Card className="mb-6 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              Enter Two Numbers
            </CardTitle>
            <CardDescription>
              Input any two integers to find their highest common factor
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Input Row */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="flex-1 w-full">
                <label className="text-sm font-medium mb-2 block">First Number</label>
                <Input
                  type="number"
                  placeholder="Enter first number"
                  value={num1}
                  onChange={(e) => setNum1(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="text-lg text-center"
                />
              </div>
              <div className="flex items-center justify-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                  <span className="text-muted-foreground font-semibold">&</span>
                </div>
              </div>
              <div className="flex-1 w-full">
                <label className="text-sm font-medium mb-2 block">Second Number</label>
                <Input
                  type="number"
                  placeholder="Enter second number"
                  value={num2}
                  onChange={(e) => setNum2(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="text-lg text-center"
                />
              </div>
            </div>

            {/* Error Alert */}
            {error && (
              <Alert variant="destructive">
                <Info className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                onClick={handleCalculate} 
                className="flex-1 gap-2"
                size="lg"
              >
                <Calculator className="h-5 w-5" />
                Calculate HCF
              </Button>
              <Button 
                onClick={handleReset} 
                variant="outline" 
                className="gap-2"
                size="lg"
              >
                <RotateCcw className="h-5 w-5" />
                Reset
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Result Section */}
        {result !== null && (
          <Card className="mb-6 border-primary/20 bg-primary/5">
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-2">Highest Common Factor</p>
                <div className="flex items-center justify-center gap-3 flex-wrap">
                  <Badge variant="outline" className="text-lg px-4 py-2">
                    {num1}
                  </Badge>
                  <span className="text-muted-foreground">&</span>
                  <Badge variant="outline" className="text-lg px-4 py-2">
                    {num2}
                  </Badge>
                  <ArrowRight className="h-5 w-5 text-muted-foreground" />
                  <Badge className="text-2xl px-6 py-3 bg-primary">
                    {result}
                  </Badge>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  HCF({num1}, {num2}) = {result}
                </p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Steps Section */}
        {steps.length > 0 && (
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                Euclidean Algorithm Steps
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {steps.map((step, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-3 p-3 rounded-lg bg-muted/50"
                  >
                    <Badge variant="secondary" className="shrink-0">
                      Step {index + 1}
                    </Badge>
                    <div className="flex-1 font-mono text-sm">
                      <span className="text-primary font-semibold">{step.number1}</span>
                      {' = '}
                      <span className="text-primary font-semibold">{step.number2}</span>
                      {' × '}
                      <span className="text-muted-foreground">{step.quotient}</span>
                      {' + '}
                      <span className={step.remainder === 0 ? 'text-green-500 font-semibold' : ''}>
                        {step.remainder}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Explanation Section */}
        <Card>
          <CardHeader 
            className="cursor-pointer"
            onClick={() => setShowExplanation(!showExplanation)}
          >
            <CardTitle className="flex items-center gap-2 text-lg">
              <Lightbulb className="h-5 w-5 text-amber-500" />
              What is HCF?
              <span className="ml-auto text-sm text-muted-foreground">
                {showExplanation ? 'Hide' : 'Show'}
              </span>
            </CardTitle>
          </CardHeader>
          {showExplanation && (
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                The <strong>Highest Common Factor (HCF)</strong>, also known as the 
                <strong> Greatest Common Divisor (GCD)</strong>, is the largest positive integer 
                that divides two or more numbers without leaving a remainder.
              </p>
              <Separator />
              <div>
                <h4 className="font-semibold mb-2">Examples:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    HCF(12, 18) = 6 (factors of 12: 1,2,3,4,6,12; factors of 18: 1,2,3,6,9,18)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    HCF(35, 49) = 7 (factors of 35: 1,5,7,35; factors of 49: 1,7,49)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    HCF(100, 75) = 25
                  </li>
                </ul>
              </div>
              <Separator />
              <div>
                <h4 className="font-semibold mb-2">Euclidean Algorithm:</h4>
                <p className="text-muted-foreground">
                  This calculator uses the Euclidean algorithm, which repeatedly applies the division 
                  algorithm: HCF(a, b) = HCF(b, a mod b), until the remainder is zero. 
                  The last non-zero remainder is the HCF.
                </p>
              </div>
            </CardContent>
          )}
        </Card>
      </div>
    </Layout>
  );
}
