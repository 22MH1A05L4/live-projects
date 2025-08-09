# Dimension Landing Page

A modern, responsive landing page inspired by Dimension.dev, built with Next.js, TypeScript, and Tailwind CSS.

## ✨ Features

- 🎨 **Modern Design**: Clean, minimalist design with gradient accents matching Dimension.dev
- ✨ **Smooth Animations**: Framer Motion powered animations throughout
- 📱 **Fully Responsive**: Optimized for all screen sizes (desktop, tablet, mobile)
- 🌙 **Dark Theme**: Beautiful dark theme with purple and blue gradients
- 🎯 **Interactive Elements**: Mouse-following effects and hover animations
- ⚡ **Performance Optimized**: Built with Next.js 14 and optimized for speed
- 🔧 **TypeScript**: Full type safety and proper TypeScript implementation
- 🎭 **Component-Based**: Clean, organized component architecture

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── HeroSection.tsx          # Hero section with animations
│   │   ├── FeaturesSection.tsx      # Features grid with cards
│   │   ├── PricingSection.tsx       # Pricing plans with toggle
│   │   ├── TestimonialsSection.tsx  # Customer testimonials
│   │   ├── CTASection.tsx           # Call-to-action section
│   │   ├── Footer.tsx               # Footer with links
│   │   └── MobileNav.tsx            # Mobile navigation menu
│   ├── globals.css                  # Global styles and animations
│   ├── layout.tsx                   # Root layout with metadata
│   └── page.tsx                     # Main landing page
├── tailwind.config.ts               # Tailwind configuration
└── package.json                     # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone or navigate to the project**:
   ```bash
   cd dimension-landing
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Key Components

### Hero Section
- Animated gradient text with "Build the Future Today"
- Floating background elements
- Mouse-following gradient effect
- Call-to-action buttons with hover effects
- Statistics display

### Features Section
- 12 feature cards with unique gradients
- Hover animations and scaling effects
- Responsive grid layout
- Icon-based feature highlights

### Pricing Section
- 3 pricing tiers (Starter, Pro, Enterprise)
- Monthly/yearly toggle with animations
- Popular plan highlighting
- Feature lists with checkmarks

### Testimonials Section
- Customer testimonials with ratings
- Avatar placeholders with gradients
- Statistics section
- Responsive card layout

### CTA Section
- Final call-to-action with trust indicators
- Company logos display
- Floating background elements
- Multiple CTA buttons

### Navigation & Footer
- Responsive navigation with mobile menu
- Smooth scroll navigation
- Comprehensive footer with links
- Social media icons

## 🎭 Animations

### Framer Motion Animations
- **Entrance Animations**: Staggered fade-in and slide-up effects
- **Hover Effects**: Scale, translate, and color transitions
- **Scroll Animations**: Parallax effects and scroll-triggered animations
- **Mouse Following**: Interactive gradient that follows cursor
- **Floating Elements**: Continuous floating animations

### CSS Animations
- **Gradient Text**: Animated gradient text effects
- **Backdrop Blur**: Glass morphism effects
- **Smooth Transitions**: All interactive elements have smooth transitions

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Mobile Features
- Collapsible navigation menu
- Touch-friendly buttons
- Optimized typography scaling
- Stacked layouts for better mobile UX

## 🎨 Design System

### Colors
- **Primary**: Purple (`purple-500`, `purple-600`)
- **Secondary**: Blue (`blue-500`, `blue-600`)
- **Background**: Black (`black`)
- **Text**: White (`white`) and Gray variants
- **Accents**: Various gradient combinations

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold weights with gradient text
- **Body**: Regular weight with proper line height
- **Responsive**: Scales appropriately across devices

### Spacing
- Consistent spacing using Tailwind's spacing scale
- Proper padding and margins for all components
- Responsive spacing adjustments

## 🔧 Customization

### Colors
Modify the gradient classes in components:
```css
bg-gradient-to-r from-purple-500 to-blue-500
```

### Animations
Customize Framer Motion animations in component files:
```typescript
transition={{ duration: 0.8, delay: 0.2 }}
```

### Content
Update text content, features, and testimonials in respective component files.

## 📦 Dependencies

### Core Dependencies
- `next`: 14.x - React framework
- `react`: 18.x - UI library
- `react-dom`: 18.x - React DOM
- `typescript`: 5.x - Type safety

### Animation & UI
- `framer-motion`: 10.x - Animation library
- `lucide-react`: 0.x - Icon library

### Development
- `tailwindcss`: 3.x - CSS framework
- `eslint`: 8.x - Code linting
- `@types/*`: TypeScript type definitions

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms
```bash
npm run build
npm start
```

## 📄 License

MIT License - feel free to use this project for your own purposes.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For questions or support, please open an issue in the repository.

---

**Built with ❤️ for developers**
