import React, { useState } from "react";
import { menuItems } from "../../../../data/learningData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

function TrackItems() {

    const [openChapterIds, setOpenChapterIds] = useState([]);

    const handleChapterClick = (chapterId) => {
        if (openChapterIds.includes(chapterId)) {
            setOpenChapterIds(openChapterIds.filter(id => id !== chapterId));
        } else {
            setOpenChapterIds([...openChapterIds, chapterId]);
        }
    };

    return <div className="">
        {menuItems.chapters.map((chapter) => (
            <div key={chapter.idChapter} className="cursor-pointer">
                <div className=" flex justify-between items-center  px-4 py-4 border-b border-[#dedfe0] bg-[#f7f8fa] hover:bg-[#edeff1]" onClick={() => handleChapterClick(chapter.idChapter)}>
                    <div>
                        <h1 className="font-semibold">
                            {chapter.nameChapter}
                        </h1>
                        <p className="text-sm">{chapter.lessons.length} lessons</p>
                    </div>
                    <FontAwesomeIcon icon={openChapterIds.includes(chapter.idChapter) ? faChevronDown : faChevronUp} />
                </div>

                {openChapterIds.includes(chapter.idChapter) && (
                    <div>
                        {chapter.lessons.map((lesson) => (
                            <div className="px-6 py-4 hover:bg-slate-100" key={lesson.idLesson}>
                                <h1>{lesson.nameLesson}</h1>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        ))}
    </div>
}

export default TrackItems;
