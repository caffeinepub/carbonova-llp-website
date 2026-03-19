import { Toaster } from "@/components/ui/sonner";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import About from "./pages/About";
import Compliance from "./pages/Compliance";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Investors from "./pages/Investors";
import Partnerships from "./pages/Partnerships";
import Technology from "./pages/Technology";

function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      {children}
    </motion.div>
  );
}

function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <div className="flex-1">
        <AnimatePresence mode="wait">
          <Outlet />
        </AnimatePresence>
      </div>
      <Footer />
      <Toaster />
    </div>
  );
}

const rootRoute = createRootRoute({ component: RootLayout });

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => (
    <PageWrapper>
      <Home />
    </PageWrapper>
  ),
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: () => (
    <PageWrapper>
      <About />
    </PageWrapper>
  ),
});

const technologyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/technology",
  component: () => (
    <PageWrapper>
      <Technology />
    </PageWrapper>
  ),
});

const partnershipsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/partnerships",
  component: () => (
    <PageWrapper>
      <Partnerships />
    </PageWrapper>
  ),
});

const complianceRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/compliance",
  component: () => (
    <PageWrapper>
      <Compliance />
    </PageWrapper>
  ),
});

const investorsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/investors",
  component: () => (
    <PageWrapper>
      <Investors />
    </PageWrapper>
  ),
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: () => (
    <PageWrapper>
      <Contact />
    </PageWrapper>
  ),
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  technologyRoute,
  partnershipsRoute,
  complianceRoute,
  investorsRoute,
  contactRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
