import { CenterArea } from "./component/CenterArea";
import { LeftSidebar } from "./component/LeftSidebar";
import { RightSidebar } from "./component/RightSidebar";
export default function Dashboard() {
  return (
    <div className="grid grid-cols-1 lg:flex min-h-screen">
      <LeftSidebar />
      <CenterArea />
      <RightSidebar />
    </div>
  );
}
