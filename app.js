var app = angular.module('portfolioApp', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', { templateUrl: 'views/home.html' })
        .when('/about', { templateUrl: 'views/about.html' })
        .when('/projects', { templateUrl: 'views/projects.html' })
        .when('/skills', { templateUrl: 'views/skills.html' })
        .when('/achievements', { templateUrl: 'views/achievements.html' })
        .otherwise({ redirectTo: '/' });

    $locationProvider.hashPrefix('');
}]);

app.controller('MainController', ['$location', function ($location) {
    var vm = this;

    vm.profile = {
        availability: 'Available for Work',
        location: 'Based in India',
        emoji: '\uD83D\uDC68\u200D\uD83D\uDCBB',
        title: 'Creative Director & Developer',
        description: 'I design and build polished web experiences with strong visual hierarchy, clean interaction, and production-ready frontend engineering.',
        copyright: '© 2026 vivekkumar'
    };

    vm.navItems = [
        { label: 'Home', path: '/' },
        { label: 'About', path: '/about' },
        { label: 'Projects', path: '/projects' },
        { label: 'Skills', path: '/skills' },
        { label: 'Achievements', path: '/achievements' }
    ];

    vm.links = [
        { label: 'Instagram', href: 'https://instagram.com/' },
        { label: 'LinkedIn', href: 'https://linkedin.com/' },
        { label: 'Email', href: 'mailto:hello@example.com' }
    ];

    vm.projects = [
        {
            icon: 'AI',
            stack: 'Flutter / Firebase',
            name: 'Employee Management System',
            description: 'Attendance, leave workflows, OCR document scan, auth, and export flows for operations teams.',
            link: 'https://github.com/vivekkumars21/EMS-for-Plexusnet'
        },
        {
            icon: 'WEB',
            stack: 'React / Node.js',
            name: 'Logistics Dashboard',
            description: 'Internal logistics dashboard with live status tracking and SQL-backed reporting.',
            link: 'https://github.com/vivekkumars21/logistics_dashboard'
        }
    ];

    vm.skills = [
        'Java', 'JavaScript', 'HTML/CSS', 'React.js', 'Node.js',
        'Flutter', 'Firebase', 'Git/GitHub', 'AWS', 'Vercel', 'SQL', 'PostgreSQL'
    ];

    vm.achievements = [
        { when: 'Current', title: 'Tech Head of ISTE SAL' },
        { when: 'Ongoing', title: 'Active Hackathon Participant' }
    ];

    vm.isActive = function (path) {
        return $location.path() === path || (path === '/' && $location.path() === '');
    };
}]);
