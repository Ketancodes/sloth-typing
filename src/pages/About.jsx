import { LayoutList, LayoutDashboard, ChartSpline } from "lucide-react";

export default function About() {
  return (
    <>
      <h1 className="text-3xl text-[#aca9a9] font-medium mt-3 ml-7">About</h1>
      <div className=" flex justify-self-center text-[#a5a2a2] text-[18px] mt-4 px-2 text-md w-[97%]">
        <p>
          sloth typing is a minimal,customizable typing app . it's a platform
          designed to help you build real typing speed, accuracy, and
          consistency with every session. where you can track everything at the
          end of the test , you can track your progress and improve your overall
          typing skills..!
        </p>
      </div>
      <div className="flex items-start text-[#a5a2a2] ml-5 text-[18px] mt-10 px-2 w-[97%] gap-4">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <LayoutList size={20} />
            <span className="font-medium">Options</span>
          </div>
          <p>
            Time - as default it was set to 30s, but you can toggle between 30s
            and 60s accordingly.
          </p>
          <p>
            words - as default top 200 (basic 200) english words has been used ,
            but u can choose top 1000.{" "}
          </p>
          <p>
            custom - with this you can customize your own set of words
            accordingly.
          </p>
          <p>leaderboard - this shows all time top typers in the tests.</p>
        </div>
      </div>
      <div className="flex items-start text-[#a5a2a2] ml-5 text-[18px] mt-10 px-2 w-[97%] gap-4">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <LayoutDashboard size={20} />
            <span className="font-medium">Dashboard</span>
          </div>
          <p>
            wpm - calculating correct words typed in a minute ,( correct
            words/5)/60(seconds)
          </p>
          <p>
            accuracy - this calculates percentage(%) of correct typed characters
          </p>
          <p>
            typed words - this shows all correct typed/ wrong typed/ extra/
            missed characters in numbers
          </p>
          <p>
            consistency - this measures how steadily you maintain your typing
            speed throughout the test
          </p>
        </div>
      </div>
      <div className="flex items-start text-[#a5a2a2] ml-5 text-[18px] mt-10 px-2 w-[97%] gap-4">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <ChartSpline size={20} />
            <span className="font-medium">results</span>
          </div>
          <p>wpm - should be as higher as possible .</p>
          <p>
            accuracy - it should be as close to 100% (accuracy &gt; 95% , always
            good ) .
          </p>
          <p>
            typed words - xx /0/0/0 ( better if try to make less errors as
            possible ) .
          </p>
          <p>consistency - closer to 100% is always better .</p>
        </div>
      </div>
    </>
  );
}
