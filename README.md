# Fairy Knowe Backpackers Website

A modern, responsive website for a backpackers hostel built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Responsive design for all devices
- Modern UI with smooth animations
- Accommodation booking system
- Photo gallery
- Adventure center with activities
- Interactive booking form

## Prerequisites

- Node.js 18.x or later
- npm or yarn package manager

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd fairy-knowe-backpackers
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Add your images to the `public` directory:
- hero-image.jpg
- accommodation.jpg
- adventure.jpg
- gallery.jpg
- dormitory.jpg
- private-room.jpg
- family-room.jpg
- hiking.jpg
- climbing.jpg
- rafting.jpg
- biking.jpg
- adventure-hero.jpg
- gallery-1.jpg through gallery-8.jpg

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
backpackers-haven/
├── public/           # Static files and images
├── src/
│   ├── app/         # Next.js app directory
│   │   ├── page.tsx           # Home page
│   │   ├── accommodation/     # Accommodation page
│   │   ├── gallery/          # Photo gallery page
│   │   ├── booking/          # Booking page
│   │   └── adventure/        # Adventure center page
│   └── components/  # Reusable components
├── package.json
├── tsconfig.json
└── tailwind.config.js
```

## Technologies Used

- Next.js 14
- TypeScript
- Tailwind CSS
- React
- Framer Motion (for animations)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 