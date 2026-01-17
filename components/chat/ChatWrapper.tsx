import Chat from "@/components/chat/Chat";
import SidebarToggle from "../SidebarToggle";
import { portfolioData } from "@/lib/data/portfolio";

function ChatWrapper() {
  const profile = portfolioData.profile;

  return (
    <div className="h-full w-full">
      <div className="md:hidden p-2 sticky top-0 z-10">
        <SidebarToggle />
      </div>

      <Chat profile={profile as any} />
    </div>
  );
}

export default ChatWrapper;
