import { CenterArea } from "./component/CenterArea";
import { LeftSidebar } from "./component/LeftSidebar";
import { RightSidebar } from "./component/RightSidebar";
export default function Dashboard() {
  return (
    <div className="flex min-h-screen">
      <LeftSidebar />
      <CenterArea />
      <RightSidebar />
    </div>
  );
}
