import firebase from "firebase/app";

export default [
  {
    title: "NASA's APOD",
    features: [
      "Browse astronomical pictures from NASA",
      "Set your home screen, lock screen, or both wallpapers to an image you liked",
      "Add your own favorite dates",
      "Enable daily changing home screen wallpaper based on the APOD (Astronomy Picture of the Day)",
      "Option to use HD images for wallpapers or not (to save data)",
    ],
    links: [
      {
        site: "download",
        disabled: false,
        url:
          "https://drive.google.com/file/d/13P11REdVTiO7q7ROiKCtTmGWM92LziYc/view?usp=sharing",
      },
    ],
    stack: "Flutter, Dart",
    date_dev: firebase.firestore.Timestamp.fromDate(new Date("Oct 10 2020")),
    images: [
      {
        label: "NASA's APOD",
        url: "nasa_apod/logo.png",
      },
      {
        label: "Browse the APOD Gallery",
        url: "nasa_apod/recents.jpg",
      },
      {
        url: "nasa_apod/settings.jpg",
        label: "Enable daily changing wallpaper",
      },
      {
        url: "nasa_apod/detail.jpg",
        label: "View and read about each photo's background",
      },
      {
        label: "Seek a memorable date",
        url: "nasa_apod/date.jpg",
      },
      {
        label: "Give a star to your favorite dates",
        url: "nasa_apod/favorites.jpg",
      },
      {
        label: "Share what you found",
        url: "nasa_apod/share.jpg",
      },
      {
        label: "Set an image you liked as your wallpaper",
        url: "nasa_apod/wallpaper.jpg",
      },
    ],
    descriptionHtml:
      '<p><a href="https://analytics.usa.gov/national-aeronautics-space-administration/">NASA\'s APOD</a>is one of the most popular APIs by NASA, and while finding an API to enhance my skills,and also catching into <a href="https://flutter.dev/">Flutter</a>\'s gaining popularity,I decided to create an app to try showcase APOD other than<a href="https://apod.nasa.gov/apod/">NASA\'s single webpage</a>.</p><p>NOTE: NASA updates APOD some time after midnight of EST (Eastern Standard Time UTC-5).If the app shows "No Available APOD for today", the next update time is estimatedbased on your local timezone.</p>',
  },
  {
    images: [
      {
        url: "roomfiles/logo.jpg",
        label: "RoomFiles",
      },
      {
        url: "roomfiles/room.jpg",
        label: "Create a room with your friends / colleagues!",
      },
      {
        url: "roomfiles/rooms.png",
        label: "Join / Create multiple rooms for your needs",
      },
      {
        label: "Store and share your lesson files",
        url: "roomfiles/files.jpg",
      },
      {
        url: "roomfiles/announcements.jpg",
        label: "Make announcements for everyone to see",
      },
      {
        label: "Get notified on recent activities",
        url: "roomfiles/notifications.jpg",
      },
      {
        url: "roomfiles/people.jpg",
        label: "Manage people in your room",
      },
    ],
    featuers: [
      "Make a room and invite your colleagues",
      "Join multiple rooms at once",
      "Upload your lesson files",
      "Make announcements to stay on track",
      "View and manage people in your room (if you're the room creator)",
      "Get notified on recent activities",
    ],
    descriptionHtml:
      '<p>RoomFiles is a small project I made while learning Python and Django. Using <a href="https://developers.google.com/drive">Google Drive API</a>,this simple web-app provides a place for users to upload files to (primarily lesson filesfor online learning), make announcements, all in a virtual room. Due to the ongoing(at the time of writing) pandemic situation, online learning is what our educational systemrelies to, and this might help students store their lesson files on the cloud.</p><p>The web-app is up and available for viewing using the links below.</p>',
    links: [
      {
        disabled: false,
        site: "github",
        url: "https://github.com/christiankyle-ching/roomfiles",
      },
      {
        site: "open",
        disabled: false,
        url: "https://roomfiles.herokuapp.com/",
      },
    ],
    stack: "Django, Python",
    title: "RoomFiles",
    date_dev: firebase.firestore.Timestamp.fromDate(new Date("Aug 12 2020")),
  },
  {
    links: [
      {
        url: "https://github.com/christiankyle-ching/budgetPlanner",
        disabled: false,
        site: "github",
      },
      {
        disabled: false,
        url:
          "https://drive.google.com/file/d/1U31DbJgD7HOfacY7kia3Tb92wUpA1Own/view?usp=sharing",
        site: "download",
      },
    ],
    date_dev: firebase.firestore.Timestamp.fromDate(new Date("Jun 01 2020")),
    featuers: [
      "Day-to-day tracking of allowances and expenses",
      "Generate monthly summary, provide basic insight of expenditures and income",
      "Able to backup data to a file for later recovery",
      "Has a Help & Feedback feature that answers FAQs and provides an email box for suggestions",
    ],
    descriptionHtml:
      '<p>A simple budget planner that I made using <a href="https://ionicframework.com/">Ionic</a>/ <a href="https://angular.io/">Angular</a> stack. While starting to learn about Ionic,it has come to my idea to make a relatively simple budget planner/tracking app targeted for highschoolstudents that hopefully, they can use to track their allowances and expenses, and might encourage themto save some of their money.</p>',
    stack: "Ionic, Angular",
    images: [
      {
        label: "A simple budget planner made with Ionic",
        url: "budget/logo.jpg",
      },
      {
        url: "budget/dark.jpg",
        label: "Supports dark mode",
      },
      {
        url: "budget/summary.jpg",
        label: "Generate montly overview",
      },
      {
        url: "budget/toplist.jpg",
        label: "View your expenses",
      },
      {
        url: "budget/savings.jpg",
        label: "Track your savings",
      },
      {
        url: "budget/help.jpg",
        label: "Never feel clueless! I'm here.",
      },
      {
        label: "Even supports local backup!",
        url: "budget/backup.jpg",
      },
    ],
    title: "Budget Planner",
  },
  {
    images: [
      {
        url: "edzer/logo.png",
        label: "A Recording Studio Scheduling System",
      },
      {
        label: "Login",
        url: "edzer/login.jpg",
      },
      {
        url: "edzer/dashboard.jpg",
        label: "Dashboard Overview",
      },
      {
        label: "Add Schedules",
        url: "edzer/add.jpg",
      },
      {
        url: "edzer/schedules.jpg",
        label: "Be reminded of who's next",
      },
      {
        url: "edzer/instruments.jpg",
        label: "Manage Instruments",
      },
    ],
    stack: "WPF, C#, MySQL",
    title: "Edzer Studio Schedule Management System",
    descriptionHtml:
      '<p>This is a group project that I made together with a team, as a requirement for one of mydatabase-related subjects on my 2nd year. Along with a planned database schema, an interviewwith <a href="https://www.facebook.com/EDZERSTUDIO/">Edzer Music Studio</a>,this WPF application (C# and MySQL served on XAMPP) features a scheduling system with feescomputation based on hours and intrument rentals, intrument management, and a user panel forthe administrator to assign other users with less privileges to the system.</p>',
    links: [
      {
        url: "#",
        site: "github",
        disabled: true,
      },
    ],
    date_dev: firebase.firestore.Timestamp.fromDate(new Date("Dec 01 2019")),
    featuers: [
      "Schedule management that enables system user to create, update, and delete schedule records",
      "Notifies the system user (admin or an employee), on upcoming schedules about to start",
      "Able to calculate rental fee based on duration of rent, as well as add-ons (instrument rentals)",
      "Management of instruments available for rental",
      "User account control with two (2) levels of privileges (administrator and basic user).",
    ],
  },
];
