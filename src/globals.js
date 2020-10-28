// #region images

// Budget Planner images
import budget_logo from "./images/budget-planner/logo.jpg";
import budget_dark from "./images/budget-planner/dark.jpg";
import budget_summary from "./images/budget-planner/summary.jpg";
import budget_toplist from "./images/budget-planner/toplist.jpg";
import budget_savings from "./images/budget-planner/savings.jpg";
import budget_help from "./images/budget-planner/help.jpg";
import budget_backup from "./images/budget-planner/backup.jpg";

// RoomFiles
import roomfiles_logo from "./images/roomfiles/logo.jpg";
import roomfiles_files from "./images/roomfiles/files.jpg";
import roomfiles_announcements from "./images/roomfiles/announcements.jpg";
import roomfiles_notifications from "./images/roomfiles/notifications.jpg";
import roomfiles_people from "./images/roomfiles/people.jpg";
import roomfiles_room from "./images/roomfiles/room.jpg";
import roomfiles_rooms from "./images/roomfiles/rooms.png";

// Edzer images
import edzer_logo from "./images/edzer/logo.png";
import edzer_add from "./images/edzer/add.jpg";
import edzer_dashboard from "./images/edzer/dashboard.jpg";
import edzer_instruments from "./images/edzer/instruments.jpg";
import edzer_login from "./images/edzer/login.jpg";
import edzer_schedules from "./images/edzer/schedules.jpg";

// #endregion

const works = [

    // RoomFiles
    {
        title: "RoomFiles",
        date_dev: "2020",
        stack: "Django, Python",
        description:
            `
              <p>
              RoomFiles is a small project I made while learning Python and Django. Using 
              <a href="https://developers.google.com/drive" class="underline">Google Drive API</a>,
              this simple web-app provides a place for users to upload files to (primarily lesson files 
              for online learning), make announcements, all in a virtual room. Due to the ongoing 
              (at the time of writing) pandemic situation, online learning is what our educational system
              relies to, and this might help students store their lesson files on the cloud.
              </p>
              
              <p>The web-app is up and available for viewing using the links below.</p>
          `,
        features: [
            "Make a room and invite your colleagues",
            "Join multiple rooms at once",
            "Upload your lesson files",
            "Make announcements to stay on track",
            "View and manage people in your room (if you're the room creator)",
            "Get notified on recent activities",
        ],
        prefix: "roomfiles",
        images: [
            {
                url: roomfiles_logo,
                label: "RoomFiles",
            },
            {
                url: roomfiles_room,
                label: "Create a room with your friends / colleagues!",
            },
            {
                url: roomfiles_rooms,
                label: "Join / Create multiple rooms for your needs",
            },
            {
                url: roomfiles_files,
                label: "Store and share your lesson files",
            },
            {
                url: roomfiles_announcements,
                label: "Make announcements for everyone to see",
            },
            {
                url: roomfiles_notifications,
                label: "Get notified on recent activities",
            },
            {
                url: roomfiles_people,
                label: "Manage people in your room",
            },
        ],
        links: [
            {
                site: "github",
                url: "https://github.com/christiankyle-ching/roomfiles",
                disabled: false,
            },
            {
                site: "open",
                url: "https://roomfiles.herokuapp.com/",
                disabled: false,
            },
        ],
    },

    // Budget Planner
    {
        title: "Budget Planner",
        date_dev: "2020",
        stack: "Ionic, Angular",
        description:
            `
            <p>
            A simple budget planner that I made using <a href="https://ionicframework.com/" class="underline">Ionic</a>
            / <a href="https://angular.io/" class="underline">Angular</a> stack. While starting to learn about Ionic, 
            it has come to my idea to make a relatively simple budget planner/tracking app targeted for highschool
            students that hopefully, they can use to track their allowances and expenses, and might encourage them
            to save some of their money.
            </p>
          `,
        features: [
            "Day-to-day tracking of allowances and expenses",
            "Generate monthly summary, provide basic insight of expenditures and income",
            "Able to backup data to a file for later recovery",
            "Has a Help & Feedback feature that answers FAQs and provides an email box for suggestions",
        ],
        prefix: "budget",
        images: [
            {
                url: budget_logo,
                label: "Swipe to right for more images!",
            },
            {
                url: budget_dark,
                label: "Supports dark mode",
            },
            {
                url: budget_summary,
                label: "Generate montly overview",
            },
            {
                url: budget_toplist,
                label: "View your expenses",
            },
            {
                url: budget_savings,
                label: "Track your savings",
            },
            {
                url: budget_help,
                label: "Never feel clueless! I'm here.",
            },
            {
                url: budget_backup,
                label: "Even supports local backup!",
            },
        ],
        links: [
            {
                site: "github",
                url: "https://github.com/christiankyle-ching/budgetPlanner",
            },
            {
                site: "open",
                url: "https://drive.google.com/file/d/1okJvPV2dOkjKejBTUYX1rtatRUkvdbIs/view?usp=sharing",
            },
        ],
    },


    // Edzer
    {
        title: "Edzer Studio Schedule Management System",
        date_dev: "2019",
        stack: "C#, MySQL",
        description:
            `
            <p>
            This is a group project that I made together with a team, as a requirement for one of my 
            database-related subjects on my 2nd year. Along with a planned database schema, an interview 
            with <a href="https://www.facebook.com/EDZERSTUDIO/" class="underline">Edzer Music Studio</a>, 
            this WPF application (C# and MySQL served on XAMPP) features a scheduling system with fees 
            computation based on hours and intrument rentals, intrument management, and a user panel for 
            the administrator to assign other users with less privileges to the system.
            </p>
          `,
        features: [
            "Schedule management that enables system user to create, update, and delete schedule records",
            "Notifies the system user (admin or an employee), on upcoming schedules about to start",
            "Able to calculate rental fee based on duration of rent, as well as add-ons (instrument rentals)",
            "Management of instruments available for rental",
            "User account control with two (2) levels of privileges (administrator and basic user).",
        ],
        prefix: "edzer",
        images: [
            {
                url: edzer_logo,
                label: "A Recording Studio Scheduling System",
            },
            {
                url: edzer_login,
                label: "Login",
            },
            {
                url: edzer_dashboard,
                label: "Dashboard Overview",
            },
            {
                url: edzer_add,
                label: "Add Schedules",
            },
            {
                url: edzer_schedules,
                label: "Be reminded of who's next",
            },
            {
                url: edzer_instruments,
                label: "Manage Instruments",
            },
        ],
        links: [
            {
                site: "github",
                url: "#",
                disabled: true,
            },
        ],
    },
];

const skills = [
    {
        language: "javascript",
        name: "Javascript",
        progress: 50,
        projectExample: "budget",
    },
    {
        language: "sql",
        name: "SQL",
        progress: 55,
        projectExample: "edzer",
    },
    {
        language: "python",
        name: "Python",
        progress: 40,
        projectExample: "roomfiles",
    },
    {
        language: "csharp",
        name: "C#",
        progress: 40,
        projectExample: "edzer",
    },
    {
        language: "java",
        name: "Java",
        progress: 30,
    },
];

export default class Global {

    static get works() { return works };
    static get skills() { return skills };

}