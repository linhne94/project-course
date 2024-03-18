//import image
import CImg from "../assets/images/Product/c.jpg";
import FullStackImg from "../assets/images/Product/full-stack.jpg";

import JsImg from "../assets/images/Product/js.jpg";
import NodeImg from "../assets/images/Product/node.jpg";
import PythonImg from "../assets/images/Product/python.jpg";
import ReactImg from "../assets/images/Product/react.jpg";
import SafeTyImg from "../assets/images/Product/safety.jpg";
import SassImg from "../assets/images/Product/sass.jpg";
import UbuntuImg from "../assets/images/Product/ubuntu.png";

import HtmlImg from "../assets/images/Product/html-css.jpg";
export const dataCourse = {
  course: [
    {
      id: 1,
      name: "Fullstack Course For Beginners",
      description: "A Full Path for Developers who wants to be Fullstack",
      category: "Technology",
      image: <HtmlImg />,
      isConfirmed: false,
      isFree: false,
      isDelete: false,
      price: 1800000,
      chapters: [
        {
          name: "Chapter 1",
          videos: [
            {
              name: "Introduction to Fullstack",
              url: "https://www.youtube.com/embed/zoEtcR5EW08",
            },
            {
              name: "Building Frontend with React",
              url: "https://www.youtube.com/embed/pG96c3gFAfs",
            },
            {
              name: "Backend with Node.js",
              url: "https://www.youtube.com/embed/YH-E4Y3EaT4",
            }
          ],
        },
        {
          name: "Chapter 2",
          videos: [
            {
              name: "Database Design",
              url: "https://www.youtube.com/embed/f5hbmw7Ba7c",
            },
            {
              name: "Authentication and Authorization",
              url: "https://www.youtube.com/embed/10j9phjctxI",
            },
            {
              name: "RESTful APIs",
              url: "https://www.youtube.com/embed/oF7isq9IjZM",
            }
          ],
        },
        {
          name: "Chapter 3",
          videos: [
            {
              name: "Testing and Debugging",
              url: "https://www.youtube.com/embed/sgq7BH6WxL8",
            },
            {
              name: "Deployment and Hosting",
              url: "https://www.youtube.com/embed/utF5vj7Ljuo",
            },
            {
              name: "Continuous Integration",
              url: "https://www.youtube.com/embed/n4tS1Q5-EzY",
            }
          ],
        },
      ],
      objective: [
        "Learn how to interact with simple HTML, CSS and JavaScript.",
        "Learn how to create a website.",
        "Backend with Node.js.",
        "Certificate for job applications.",
      ],
    },
    {
      id: 2,
      name: "Server-Side Development",
      description: "Learn how to interact with Node.js, MongoDB and others.",
      category: "Technology",
      image: <NodeImg />,
      isConfirmed: false,
      isFree: false,
      isDelete: false,
      price: 1800000,
      chapters: [
        {
          name: "Chapter 1",
          videos: [
            {
              name: "Introduction to Fullstack",
              url: "https://www.youtube.com/embed/zoEtcR5EW08",
            },
            {
              name: "Building Frontend with React",
              url: "https://www.youtube.com/embed/pG96c3gFAfs",
            },
            {
              name: "Backend with Node.js",
              url: "https://www.youtube.com/embed/YH-E4Y3EaT4",
            }
          ],
        },
        {
          name: "Chapter 2",
          videos: [
            {
              name: "Database Design",
              url: "https://www.youtube.com/embed/f5hbmw7Ba7c",
            },
            {
              name: "Authentication and Authorization",
              url: "https://www.youtube.com/embed/10j9phjctxI",
            },
            {
              name: "RESTful APIs",
              url: "https://www.youtube.com/embed/oF7isq9IjZM",
            }
          ],
        },
        {
          name: "Chapter 3",
          videos: [
            {
              name: "Testing and Debugging",
              url: "https://www.youtube.com/embed/sgq7BH6WxL8",
            },
            {
              name: "Deployment and Hosting",
              url: "https://www.youtube.com/embed/utF5vj7Ljuo",
            },
            {
              name: "Continuous Integration",
              url: "https://www.youtube.com/embed/n4tS1Q5-EzY",
            }
          ],
        },
      ],
      objective: [
        "Learn how to interact with simple HTML, CSS and JavaScript.",
        "Learn how to create a website.",
        "Backend with Node.js.",
        "Certificate for job applications.",
      ],
    },
    {
      id: 3,
      name: "Javascript Tutorial",
      description: "Course with JavaScript",
      category: "Technology",
      image: <JsImg />,
      isConfirmed: false,
      isFree: false,
      isDelete: true,
      price: 1800000,
      chapters: [
        {
          name: "Chapter 1",
          videos: [
            {
              name: "Introduction to Fullstack",
              url: "https://www.youtube.com/embed/zoEtcR5EW08",
            },
            {
              name: "Building Frontend with React",
              url: "https://www.youtube.com/embed/pG96c3gFAfs",
            },
            {
              name: "Backend with Node.js",
              url: "https://www.youtube.com/embed/YH-E4Y3EaT4",
            }
          ],
        },
        {
          name: "Chapter 2",
          videos: [
            {
              name: "Database Design",
              url: "https://www.youtube.com/embed/f5hbmw7Ba7c",
            },
            {
              name: "Authentication and Authorization",
              url: "https://www.youtube.com/embed/10j9phjctxI",
            },
            {
              name: "RESTful APIs",
              url: "https://www.youtube.com/embed/oF7isq9IjZM",
            }
          ],
        },
        {
          name: "Chapter 3",
          videos: [
            {
              name: "Testing and Debugging",
              url: "https://www.youtube.com/embed/sgq7BH6WxL8",
            },
            {
              name: "Deployment and Hosting",
              url: "https://www.youtube.com/embed/utF5vj7Ljuo",
            },
            {
              name: "Continuous Integration",
              url: "https://www.youtube.com/embed/n4tS1Q5-EzY",
            }
          ],
        },
      ],
      objective: [
        "Learn how to interact with simple HTML, CSS and JavaScript.",
        "Learn how to create a website.",
        "Backend with Node.js.",
        "Certificate for job applications.",
      ],
    },
    {
      id: 4,
      name: "ISTQB - Certificate for Tester",
      description: "Tester will need this",
      category: "Technology",
      image: <SafeTyImg />,
      isConfirmed: false,
      isFree: false,
      isDelete: false,
      price: 1800000,
      chapters: [
        {
          name: "Chapter 1",
          videos: [
            {
              name: "Introduction to Fullstack",
              url: "https://www.youtube.com/embed/zoEtcR5EW08",
            },
            {
              name: "Building Frontend with React",
              url: "https://www.youtube.com/embed/pG96c3gFAfs",
            },
            {
              name: "Backend with Node.js",
              url: "https://www.youtube.com/embed/YH-E4Y3EaT4",
            }
          ],
        },
        {
          name: "Chapter 2",
          videos: [
            {
              name: "Database Design",
              url: "https://www.youtube.com/embed/f5hbmw7Ba7c",
            },
            {
              name: "Authentication and Authorization",
              url: "https://www.youtube.com/embed/10j9phjctxI",
            },
            {
              name: "RESTful APIs",
              url: "https://www.youtube.com/embed/oF7isq9IjZM",
            }
          ],
        },
        {
          name: "Chapter 3",
          videos: [
            {
              name: "Testing and Debugging",
              url: "https://www.youtube.com/embed/sgq7BH6WxL8",
            },
            {
              name: "Deployment and Hosting",
              url: "https://www.youtube.com/embed/utF5vj7Ljuo",
            },
            {
              name: "Continuous Integration",
              url: "https://www.youtube.com/embed/n4tS1Q5-EzY",
            }
          ],
        },
      ],
      objective: [
        "Learn how to interact with simple HTML, CSS and JavaScript.",
        "Learn how to create a website.",
        "Backend with Node.js.",
        "Certificate for job applications.",
      ],
    },
    {
      id: 5,
      name: "Ubuntu",
      description: "Learn how to interact with simple Ubuntu.",
      category: "Technology",
      image: <UbuntuImg />,
      isConfirmed: false,
      isFree: false,
      isDelete: false,
      price: 1800000,
      chapters: [
        {
          name: "Chapter 1",
          videos: [
            {
              name: "Introduction to Fullstack",
              url: "https://www.youtube.com/embed/zoEtcR5EW08",
            },
            {
              name: "Building Frontend with React",
              url: "https://www.youtube.com/embed/pG96c3gFAfs",
            },
            {
              name: "Backend with Node.js",
              url: "https://www.youtube.com/embed/YH-E4Y3EaT4",
            }
          ],
        },
        {
          name: "Chapter 2",
          videos: [
            {
              name: "Database Design",
              url: "https://www.youtube.com/embed/f5hbmw7Ba7c",
            },
            {
              name: "Authentication and Authorization",
              url: "https://www.youtube.com/embed/10j9phjctxI",
            },
            {
              name: "RESTful APIs",
              url: "https://www.youtube.com/embed/oF7isq9IjZM",
            }
          ],
        },
        {
          name: "Chapter 3",
          videos: [
            {
              name: "Testing and Debugging",
              url: "https://www.youtube.com/embed/sgq7BH6WxL8",
            },
            {
              name: "Deployment and Hosting",
              url: "https://www.youtube.com/embed/utF5vj7Ljuo",
            },
            {
              name: "Continuous Integration",
              url: "https://www.youtube.com/embed/n4tS1Q5-EzY",
            }
          ],
        },
      ],
      objective: [
        "Learn how to interact with simple HTML, CSS and JavaScript.",
        "Learn how to create a website.",
        "Backend with Node.js.",
        "Certificate for job applications.",
      ],
    },
    // Thêm các khóa học khác tương tự ở đây
  ],
};
