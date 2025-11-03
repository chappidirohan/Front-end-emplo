import ChatAssistant from "@/components/ChatAssistant";
import { motion } from "framer-motion";

export default function EmployeeAssistant() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <div>
        <h1 className="text-3xl font-bold" data-testid="text-page-title">AI Assistant</h1>
        <p className="text-muted-foreground">Get help with your tasks and projects</p>
      </div>

      <div className="max-w-4xl">
        <ChatAssistant />
      </div>
    </motion.div>
  );
}
