import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Eye, EyeOff, UserPlus } from "lucide-react";

const registerSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters")
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, "Password must contain uppercase, lowercase, and number"),
  confirmPassword: z.string(),
  company: z.string().min(2, "Company name is required"),
  role: z.string().min(1, "Please select your role"),
  phone: z.string().optional(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type RegisterForm = z.infer<typeof registerSchema>;

interface RegisterFormProps {
  onSuccess: (user: any) => void;
  onSwitchToLogin: () => void;
}

const RegisterForm = ({ onSuccess, onSwitchToLogin }: RegisterFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterForm) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock user data - in real app this comes from backend
      const newUser = {
        id: Date.now(),
        email: data.email,
        name: `${data.firstName} ${data.lastName}`,
        company: data.company,
        role: data.role,
        phone: data.phone,
      };
      
      toast({
        title: "Account created successfully!",
        description: "Welcome to SoleMuchBetter. You can now access your dashboard.",
      });
      
      onSuccess(newUser);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Registration failed",
        description: "Please try again or contact support.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const roles = [
    "Marketing Manager",
    "Marketing Director",
    "Brand Manager",
    "Event Coordinator",
    "HR Manager",
    "Operations Manager",
    "CEO/Founder",
    "Other"
  ];

  return (
    <Card className="w-full max-w-lg mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl text-accent">Create Account</CardTitle>
        <p className="text-muted-foreground">Join SoleMuchBetter and start your branding journey</p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                {...register("firstName")}
                placeholder="John"
                className="mt-1"
              />
              {errors.firstName && (
                <p className="text-destructive text-sm mt-1">{errors.firstName.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                {...register("lastName")}
                placeholder="Doe"
                className="mt-1"
              />
              {errors.lastName && (
                <p className="text-destructive text-sm mt-1">{errors.lastName.message}</p>
              )}
            </div>
          </div>

          <div>
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              {...register("email")}
              placeholder="john@company.com"
              className="mt-1"
            />
            {errors.email && (
              <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="company">Company</Label>
              <Input
                id="company"
                {...register("company")}
                placeholder="Your Company"
                className="mt-1"
              />
              {errors.company && (
                <p className="text-destructive text-sm mt-1">{errors.company.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="role">Role</Label>
              <Select onValueChange={(value) => setValue("role", value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select your role" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  {roles.map((role) => (
                    <SelectItem key={role} value={role}>
                      {role}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.role && (
                <p className="text-destructive text-sm mt-1">{errors.role.message}</p>
              )}
            </div>
          </div>

          <div>
            <Label htmlFor="phone">Phone Number (Optional)</Label>
            <Input
              id="phone"
              type="tel"
              {...register("phone")}
              placeholder="(555) 123-4567"
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                {...register("password")}
                placeholder="Create a strong password"
                className="mt-1 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            {errors.password && (
              <p className="text-destructive text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <div className="relative">
              <Input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                {...register("confirmPassword")}
                placeholder="Confirm your password"
                className="mt-1 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="text-destructive text-sm mt-1">{errors.confirmPassword.message}</p>
            )}
          </div>

          <div className="flex items-center space-x-2 text-sm">
            <input type="checkbox" required className="rounded" />
            <span className="text-muted-foreground">
              I agree to the{" "}
              <a href="#" className="text-primary hover:underline">Terms of Service</a>
              {" "}and{" "}
              <a href="#" className="text-primary hover:underline">Privacy Policy</a>
            </span>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary hover:bg-primary/90 hover-scale"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Creating account...
              </>
            ) : (
              <>
                <UserPlus className="w-4 h-4 mr-2" />
                Create Account
              </>
            )}
          </Button>

          <div className="text-center pt-4 border-t border-border">
            <p className="text-muted-foreground text-sm">
              Already have an account?{" "}
              <button
                type="button"
                onClick={onSwitchToLogin}
                className="text-primary hover:underline font-medium"
              >
                Sign In
              </button>
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default RegisterForm;