export class ProjectListComponent {
  projects = [
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio site built with Angular.',
      image: 'assets/images/portfolio.png',
      technologies: ['Angular', 'SCSS'],
      link: 'https://yourportfolio.com',
      video: 'assets/videos/portfolio-demo.mp4'  // Optional
    },
    {
      title: 'Task Manager App',
      description: 'A to-do app built using Node.js and MongoDB.',
      image: 'assets/images/task.png',
      technologies: ['Node.js', 'Express', 'MongoDB'],
      link: 'https://yourtaskapp.com',
      video: 'assets/videos/task-demo.mp4'
    },
    {
      title: 'Video Project Demo',
      description: 'A short demo with video showcase.',
      image: 'assets/images/video-project.png',
      technologies: ['JavaScript', 'Media'],
      link: 'https://yourvideoproject.com',
      video: 'assets/videos/video-project.mp4'
    }
  ];
}
