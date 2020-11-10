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

// NASA's APOD images
import nasa_apod_logo from "./images/nasa-apod/logo.png";
import nasa_apod_date from "./images/nasa-apod/date.jpg";
import nasa_apod_detail from "./images/nasa-apod/detail.jpg";
import nasa_apod_favorites from "./images/nasa-apod/favorites.jpg";
import nasa_apod_recents from "./images/nasa-apod/recents.jpg";
import nasa_apod_settings from "./images/nasa-apod/settings.jpg";
import nasa_apod_share from "./images/nasa-apod/share.jpg";
import nasa_apod_wallpaper from "./images/nasa-apod/wallpaper.jpg";

// #endregion

/**
 * Object of type Work
 * 
 * @param {string} title
 * @param {string} date_dev
 * @param {string} stack
 * @param {string} description
 * @param {Array<string>} features
 * @param {string} prefix
 * @param {WorkImage} images
 * @param {WorkLink[]} links
 */
class Work {
    constructor(
        title,
        prefix,
        date_dev,
        stack,
        description,
        features,
        images,
        links,
    ) {
        this.title = title
        this.date_dev = date_dev
        this.stack = stack
        this.description = description
        this.features = features
        this.prefix = prefix
        this.images = images
        this.links = links
    }
}

/**
 * A Image of a Work
 * 
 * @param {string} url
 * @param {string} label
 */
class WorkImage {
    constructor(url, label) {
        this.url = url
        this.label = label
    }
}

/**
 * A Link of a Work
 * 
 * @param {string} site
 * @param {string} url
 * @param {boolean} disabled
 */
class WorkLink {
    constructor(site, url, disabled) {
        this.site = site
        this.url = url
        this.disabled = disabled
    }
}

const works = [

    new Work(
        "NASA's APOD",
        "nasa_apod",
        "2020",
        "Flutter, Dart",
        `
        <p>
        <a href="https://analytics.usa.gov/national-aeronautics-space-administration/">NASA's APOD</a> 
        is one of the most popular APIs by NASA, and while finding an API to enhance my skills, 
        and also catching into <a href="https://flutter.dev/">Flutter</a>'s gaining popularity, 
        I decided to create an app to try showcase APOD other than 
        <a href="https://apod.nasa.gov/apod/">NASA's single webpage</a>.
        </p>
        <p>
        NOTE: NASA updates APOD some time after midnight of EST (Eastern Standard Time UTC-5).
        If the app shows "No Available APOD for today", the next update time is estimated
        based on your local timezone.
        </p>
        `,
        [
            "Browse astronomical pictures from NASA",
            "Set your home screen, lock screen, or both wallpapers to an image you liked",
            "Add your own favorite dates",
            "Enable daily changing home screen wallpaper based on the APOD (Astronomy Picture of the Day)",
            "Option to use HD images for wallpapers or not (to save data)",
        ],
        [
            new WorkImage(nasa_apod_logo, "NASA's APOD"),
            new WorkImage(nasa_apod_recents, "Browse the APOD Gallery"),
            new WorkImage(nasa_apod_settings, "Enable daily changing wallpaper"),
            new WorkImage(nasa_apod_detail, "View and read about each photo's background"),
            new WorkImage(nasa_apod_date, "Seek a memorable date"),
            new WorkImage(nasa_apod_favorites, "Give a star to your favorite dates"),
            new WorkImage(nasa_apod_share, "Share what you found"),
            new WorkImage(nasa_apod_wallpaper, "Set an image you liked as your wallpaper"),
        ],
        [
            new WorkLink('download', 'https://drive.google.com/file/d/13P11REdVTiO7q7ROiKCtTmGWM92LziYc/view?usp=sharing', false),
        ]
    ),

    // RoomFiles
    new Work(
        "RoomFiles",
        "roomfiles",
        "2020",
        "Django, Python",
        `
        <p>
        RoomFiles is a small project I made while learning Python and Django. Using 
        <a href="https://developers.google.com/drive">Google Drive API</a>,
        this simple web-app provides a place for users to upload files to (primarily lesson files 
        for online learning), make announcements, all in a virtual room. Due to the ongoing 
        (at the time of writing) pandemic situation, online learning is what our educational system
        relies to, and this might help students store their lesson files on the cloud.
        </p>
        
        <p>The web-app is up and available for viewing using the links below.</p>
        `,
        [
            "Make a room and invite your colleagues",
            "Join multiple rooms at once",
            "Upload your lesson files",
            "Make announcements to stay on track",
            "View and manage people in your room (if you're the room creator)",
            "Get notified on recent activities",
        ],
        [
            new WorkImage(roomfiles_logo, "RoomFiles"),
            new WorkImage(roomfiles_room,
                "Create a room with your friends / colleagues!"),
            new WorkImage(roomfiles_rooms,
                "Join / Create multiple rooms for your needs"),
            new WorkImage(roomfiles_files,
                "Store and share your lesson files"),
            new WorkImage(roomfiles_announcements,
                "Make announcements for everyone to see"),
            new WorkImage(roomfiles_notifications,
                "Get notified on recent activities"),
            new WorkImage(roomfiles_people,
                "Manage people in your room")
        ],
        [
            new WorkLink(
                'github',
                'https://github.com/christiankyle-ching/roomfiles',
                false,
            ),
            new WorkLink(
                'open',
                'https://roomfiles.herokuapp.com/',
                false,
            ),
        ],
    ),

    // Budget Planner
    new Work(
        "Budget Planner",
        "budget",
        "2020",
        "Ionic, Angular",
        `
        <p>
        A simple budget planner that I made using <a href="https://ionicframework.com/">Ionic</a>
        / <a href="https://angular.io/">Angular</a> stack. While starting to learn about Ionic, 
        it has come to my idea to make a relatively simple budget planner/tracking app targeted for highschool
        students that hopefully, they can use to track their allowances and expenses, and might encourage them
        to save some of their money.
        </p>
        `,
        [
            "Day-to-day tracking of allowances and expenses",
            "Generate monthly summary, provide basic insight of expenditures and income",
            "Able to backup data to a file for later recovery",
            "Has a Help & Feedback feature that answers FAQs and provides an email box for suggestions",
        ],

        [
            new WorkImage(budget_logo,
                "A simple budget planner made with Ionic"),
            new WorkImage(budget_dark,
                "Supports dark mode"),
            new WorkImage(budget_summary,
                "Generate montly overview"),
            new WorkImage(budget_toplist,
                "View your expenses"),
            new WorkImage(budget_savings,
                "Track your savings"),
            new WorkImage(budget_help,
                "Never feel clueless! I'm here."),
            new WorkImage(budget_backup,
                "Even supports local backup!"),
        ],
        [
            new WorkLink("github", "https://github.com/christiankyle-ching/budgetPlanner", false),
            new WorkLink("download", "https://drive.google.com/file/d/1U31DbJgD7HOfacY7kia3Tb92wUpA1Own/view?usp=sharing", false),
        ],
    ),


    // Edzer
    new Work(
        "Edzer Studio Schedule Management System",
        "edzer",
        "2019",
        "C#, MySQL",
        `
        <p>
        This is a group project that I made together with a team, as a requirement for one of my 
        database-related subjects on my 2nd year. Along with a planned database schema, an interview 
        with <a href="https://www.facebook.com/EDZERSTUDIO/">Edzer Music Studio</a>, 
        this WPF application (C# and MySQL served on XAMPP) features a scheduling system with fees 
        computation based on hours and intrument rentals, intrument management, and a user panel for 
        the administrator to assign other users with less privileges to the system.
        </p>
        `,
        [
            "Schedule management that enables system user to create, update, and delete schedule records",
            "Notifies the system user (admin or an employee), on upcoming schedules about to start",
            "Able to calculate rental fee based on duration of rent, as well as add-ons (instrument rentals)",
            "Management of instruments available for rental",
            "User account control with two (2) levels of privileges (administrator and basic user).",
        ],

        [
            new WorkImage(edzer_logo,
                "A Recording Studio Scheduling System",
            ),
            new WorkImage(edzer_login,
                "Login",
            ),
            new WorkImage(edzer_dashboard,
                "Dashboard Overview",
            ),
            new WorkImage(edzer_add,
                "Add Schedules",
            ),
            new WorkImage(edzer_schedules,
                "Be reminded of who's next",
            ),
            new WorkImage(edzer_instruments,
                "Manage Instruments",
            ),
        ],
        [
            new WorkLink("github", "#", true),
        ],
    ),
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