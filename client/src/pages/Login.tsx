import { useState } from "react";
import { useLocation } from "wouter";
import { Leaf, Mail, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [, setLocation] = useLocation();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login:", { email, password });
    // TODO: Implement actual login
    setLocation("/");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-primary to-primary/80 p-4">
      <div className="flex-1 flex flex-col justify-center max-w-md mx-auto w-full">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
            <Leaf className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-3xl font-bold text-primary-foreground mb-2">
            EcoResiduos
          </h1>
          <p className="text-primary-foreground/80">
            Gestión inteligente de reciclaje
          </p>
        </div>

        <Card className="p-6">
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Label htmlFor="email">Correo electrónico</Label>
              <div className="relative mt-2">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                  data-testid="input-email"
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="password">Contraseña</Label>
              <div className="relative mt-2">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10"
                  data-testid="input-password"
                  required
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full"
              data-testid="button-login"
            >
              Iniciar Sesión
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              ¿No tienes una cuenta?{" "}
              <button
                onClick={() => setLocation("/register")}
                className="text-primary font-medium hover:underline"
                data-testid="link-register"
              >
                Regístrate
              </button>
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
