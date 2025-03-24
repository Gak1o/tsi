const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
  // Hero images
  {
    url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80',
    filename: 'hero-home.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?w=1920&q=80',
    filename: 'hero-about.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?w=1920&q=80',
    filename: 'hero-services.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?w=1920&q=80',
    filename: 'hero-projects.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?w=1920&q=80',
    filename: 'hero-blog.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?w=1920&q=80',
    filename: 'hero-contact.jpg'
  },

  // Service images
  {
    url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80',
    filename: 'service-farming.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?w=800&q=80',
    filename: 'service-soil.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?w=800&q=80',
    filename: 'service-management.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?w=800&q=80',
    filename: 'service-sustainable.jpg'
  },

  // Project images
  {
    url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80',
    filename: 'project-1.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?w=800&q=80',
    filename: 'project-2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?w=800&q=80',
    filename: 'project-3.jpg'
  },

  // Blog images
  {
    url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80',
    filename: 'blog-1.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?w=800&q=80',
    filename: 'blog-2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?w=800&q=80',
    filename: 'blog-3.jpg'
  },

  // Team images
  {
    url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&q=80',
    filename: 'team-1.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?w=400&q=80',
    filename: 'team-2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?w=400&q=80',
    filename: 'team-3.jpg'
  },

  // Testimonial images
  {
    url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=200&q=80',
    filename: 'testimonial-1.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?w=200&q=80',
    filename: 'testimonial-2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?w=200&q=80',
    filename: 'testimonial-3.jpg'
  },

  // Additional modern images
  {
    url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80',
    filename: 'modern-1.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?w=800&q=80',
    filename: 'modern-2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?w=800&q=80',
    filename: 'modern-3.jpg'
  }
];

const downloadImage = (url, filename) => {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(fs.createWriteStream(path.join(__dirname, '../public/images', filename)))
          .on('error', reject)
          .once('close', () => resolve(filename));
      } else {
        response.resume();
        reject(new Error(`Request Failed With a Status Code: ${response.statusCode}`));
      }
    });
  });
};

const downloadAllImages = async () => {
  const imagesDir = path.join(__dirname, '../public/images');
  
  // Create images directory if it doesn't exist
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
  }

  console.log('Starting image downloads...');
  let downloadedCount = 0;

  for (const image of images) {
    try {
      await downloadImage(image.url, image.filename);
      downloadedCount++;
      console.log(`Downloaded: ${image.filename}`);
    } catch (error) {
      console.error(`Error downloading ${image.filename}:`, error.message);
    }
  }

  console.log(`\nDownload complete! Total images downloaded: ${downloadedCount}`);
};

downloadAllImages(); 