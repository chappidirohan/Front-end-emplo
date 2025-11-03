import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // TODO: remove mock functionality - Mock authentication endpoint
  app.post("/api/auth/login", (req, res) => {
    const { username, password } = req.body;

    // Mock credentials
    const mockUsers = [
      { username: "admin", password: "admin123", role: "ROLE_ADMIN", name: "Admin User" },
      { username: "user", password: "user123", role: "ROLE_USER", name: "Sarah Johnson" },
    ];

    const user = mockUsers.find(
      (u) => u.username === username && u.password === password
    );

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Create a mock JWT token (base64 encoded payload)
    const header = btoa(JSON.stringify({ alg: "HS256", typ: "JWT" }));
    const payload = btoa(
      JSON.stringify({
        username: user.name,
        roles: user.role,
        exp: Math.floor(Date.now() / 1000) + 3600 * 24, // 24 hours
      })
    );
    const signature = "mock_signature";
    const token = `${header}.${payload}.${signature}`;

    res.json({ token });
  });

  const httpServer = createServer(app);

  return httpServer;
}
