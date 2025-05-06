import EditorLayout from './editor/EditorLayout';
import Image from 'next/image';
import NavBarLayout from './nav-bar/NavBarLayout';
import ResumeHeader from './resume/components/ResumeHeader';
import { ResumeLayout } from './resume/ResumeLayout';
import Tooltip from '@mui/material/Tooltip';

const BuilderLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <NavBarLayout />
      <main className="flex flex-1 max-h-[calc(100vh_-_3.5rem)] print:max-h-fit">
        <div className="flex flex-col flex-1 justify-center bg-custom-grey100 print:bg-white">
          <header className="w-[210mm] mt-5 mb-3 mx-auto print:hidden">
            <ResumeHeader />
          </header>
          <div className="overflow-auto no-scrollbar">
            <ResumeLayout />
          </div>
        </div>
        <aside className="w-[25vw] min-w-[20rem] print:hidden">
          <EditorLayout />
        </aside>
      </main>

      <footer>
        <Tooltip title="Share feedback">
          <a
            href="https://g.page/r/CSdRhQl_ZxqKEAE/review"
            target="_blank"
            rel="noreferrer"
            className="fixed w-30 h-30 bottom-4 left-4 flex justify-center items-center print:hidden" // Added print:hidden class
          >
            <Image
              src="/icons/feedback-us.svg"
              alt="Feedback button"
              width="100"
              height="100"
              placeholder="empty"
              unoptimized
            />
          </a>
        </Tooltip>
      </footer>
    </div>
  );
};

export default BuilderLayout;
