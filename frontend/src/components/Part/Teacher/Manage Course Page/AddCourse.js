import React, { useState } from "react";
import { FaUpload } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

function AddCourse() {
  const [chapters, setChapters] = useState([
    { name: "", videos: [{ name: "" }] },
  ]);
  const navigate = useNavigate();

  const addChapter = () => {
    setChapters([...chapters, { name: "", videos: [{ name: "" }] }]);
  };

  const addVideo = (chapterIndex) => {
    const updatedChapters = [...chapters];
    updatedChapters[chapterIndex].videos.push({ name: "" });
    setChapters(updatedChapters);
  };

  const handleChapterNameChange = (event, chapterIndex) => {
    const updatedChapters = [...chapters];
    updatedChapters[chapterIndex].name = event.target.value;
    setChapters(updatedChapters);
  };

  const handleVideoNameChange = (event, chapterIndex, videoIndex) => {
    const updatedChapters = [...chapters];
    updatedChapters[chapterIndex].videos[videoIndex].name = event.target.value;
    setChapters(updatedChapters);
  };

  const removeChapter = (chapterIndex) => {
    const updatedChapters = [...chapters];
    updatedChapters.splice(chapterIndex, 1);
    setChapters(updatedChapters);
  };
  const removeVideo = (chapterIndex, videoIndex) => {
    const updatedChapters = [...chapters];
    updatedChapters[chapterIndex].videos.splice(videoIndex, 1);
    setChapters(updatedChapters);
  };

  return (
    <div>
      <Link to='/teacherpage' className="flex gap-2 pl-32 pt-4">
        <FaArrowLeftLong className="pt-1 w-5 h-5" />
        <p className="">Back to teacher management</p>
      </Link>

      <div className="py-10 px-16 my-4 max-w-screen-xl bg-white border shadow-2xl sm:mx-4 sm:rounded-xl sm:px-4 sm:py-4 md:mx-auto">
        <div className="flex flex-col border-b py-1 sm:flex-row sm:items-start gap-2 p-2">
          <div className="shrink-0 mr-auto sm:py-2 mb-2">
            <p className="font-semibold text-lg">Add new Course</p>
            <p className="text-sm text-gray-600">
              Please fill out all the form
            </p>
          </div>
          <button
            onClick={() => navigate("/teacher")}
            className="py-2 px-3 flex items-start justify-start text-gray-900 border border-gray-900 bg-white hover:bg-gray-900 hover:text-white focus:ring-4 font-medium rounded-lg text-sm focus:outline-none"
          >
            Cancel
          </button>
          <button className="py-2 px-3 flex items-center text-sm font-medium text-center text-primary focus:outline-none bg-white rounded-lg border border-primary hover:bg-primary hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200">
            Save
          </button>
        </div>

        {chapters.map((chapter, chapterIndex) => (
          <div key={chapterIndex} className="block gap-4 border-b p-2">
            <div className="flex justify-end p-2">
              {chapterIndex !== 0 && ( // Render close button only if it's not Chapter 1
                <button
                  title="Delete this chapter?"
                  onClick={() => removeChapter(chapterIndex)}
                  className="text-red-600 focus:outline-none hover:bg-gray-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              )}
            </div>
            <div className="flex gap-4">
              <p className="shrink-0 w-32 font-medium">{`Chapter ${chapterIndex + 1
                }`}</p>
              <input
                placeholder="Chapter Name"
                value={chapter.name}
                onChange={(e) => handleChapterNameChange(e, chapterIndex)}
                className="w-9/12 rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1 "
              />
              <button
                onClick={() => addVideo(chapterIndex)}
                className="w-3/12 text-center justify-start pl-4 text-gray-900 border border-gray-900 bg-white hover:bg-gray-900 hover:text-white focus:ring-4 font-medium rounded-lg text-sm px-4 py-2 focus:outline-none "
              >
                Add video to this chapter
              </button>
            </div>

            {chapter.videos.map((video, videoIndex) => (
              <div
                key={videoIndex}
                className="block flex-col gap-4 py-4  lg:flex-row h-fit"
              >
                <div className="flex justify-end items-end mr-4">
                  {videoIndex > 0 && (
                    <button
                      title="Delete this video?"
                      className="self-start ml-4 text-red-600 focus:outline-none hover:bg-gray-200"
                      onClick={() => removeVideo(chapterIndex, videoIndex)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  )}
                </div>

                <div className="flex gap-2">
                  <input
                    placeholder={`Video number ${videoIndex + 1} `}
                    value={video.name}
                    onChange={(e) =>
                      handleVideoNameChange(e, chapterIndex, videoIndex)
                    }
                    className="w-7/12 h-11 rounded-md border bg-white px-2 py-2 ml-36 outline-none ring-blue-600 focus:ring-1"
                  />
                  <div className="flex h-28 w-4/12 flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-gray-300 p-1 text-center">
                    <FaUpload className="w-6 h-6 mt-1" />
                    <p className="text-sm text-gray-600">
                      Drop your desired video here to upload
                    </p>
                    <input
                      type="file"
                      className="max-w-full pl-24 rounded-lg px-2 font-medium text-blue-600 outline-none ring-blue-600 focus:ring-1"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}

        <div className="p-2">
          <button
            onClick={addChapter}
            className="flex items-start justify-start text-gray-900 border border-gray-900 bg-white hover:bg-gray-900 hover:text-white focus:ring-4 font-medium rounded-lg text-sm px-4 py-2 focus:outline-none "
          >
            Click here to add another chapter
          </button>
        </div>

        <div className="flex justify-end py-4 sm:hidden">
          <button
            onClick={() => navigate("/teacher")}
            className="mr-2 rounded-lg border-2 px-4 py-2 font-medium text-gray-500 focus:outline-none focus:ring hover:bg-gray-200"
          >
            Cancel
          </button>
          <button className="rounded-lg border-2 border-transparent bg-blue-600 px-4 py-2 font-medium text-white focus:outline-none focus:ring hover:bg-blue-700">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddCourse;
