import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import PickupRequest from "@/pages/PickupRequest";
import Map from "@/pages/Map";
import Points from "@/pages/Points";
import Events from "@/pages/Events";
import Profile from "@/pages/Profile";
import BottomNav from "@/components/BottomNav";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/pickup" component={PickupRequest} />
      <Route path="/map" component={Map} />
      <Route path="/points" component={Points} />
      <Route path="/events" component={Events} />
      <Route path="/profile" component={Profile} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-background">
          <Router />
          <BottomNav />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
