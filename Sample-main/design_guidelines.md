# Design Guidelines: Corporate Workforce Management System

## Design Approach
**System**: Material Design principles with corporate professionalism
**Reference**: Linear (clean dashboards) + Notion (data organization) + Modern SaaS applications
**Rationale**: Enterprise productivity application requiring clear data hierarchy, efficient workflows, and professional polish

## Visual Identity

**Theme**: Corporate Professional
- Primary: #1E3A8A (Deep Corporate Blue)
- Accent: #38BDF8 (Sky Blue)
- Background: #F9FAFB (Light Gray)
- Surface: White (#FFFFFF)
- Text: Gray-900 for primary, Gray-600 for secondary
- Success: Green-500, Warning: Amber-500, Error: Red-500

## Typography

**Font Family**: Inter (primary) or Poppins (fallback)
- Headings: Font-semibold to font-bold
- Page Titles: text-2xl to text-3xl
- Section Headers: text-xl font-semibold
- Body Text: text-base (16px)
- Labels/Captions: text-sm
- Metrics/KPIs: text-4xl font-bold

## Layout System

**Spacing Scale**: Tailwind units of 2, 4, 6, 8, 12, 16
- Card padding: p-6
- Section spacing: space-y-6 or space-y-8
- Grid gaps: gap-4 or gap-6
- Page margins: px-6 py-8

**Dashboard Structure**:
- Fixed sidebar (w-64) with navigation menu
- Top navbar (h-16) with user profile and logout
- Main content area with max-width container (max-w-7xl mx-auto)
- Responsive: Sidebar collapses to hamburger on mobile

## Component Library

### Authentication
**Login Page**:
- Centered card (max-w-md) on minimal background
- Input fields with labels, rounded-lg borders
- Primary button (full-width, bg-primary, hover state)
- Error messages in red-500 text below form

### Navigation Components

**Sidebar**:
- Full-height, bg-white, border-right
- Logo/brand at top (p-4)
- Navigation items with icons (Lucide React) + labels
- Active state: bg-blue-50, text-primary, left border accent
- Hover: bg-gray-50
- Icon size: w-5 h-5, paired with text-sm labels

**Top Navbar**:
- Fixed top, bg-white, shadow-sm
- Left: Page title or breadcrumbs
- Right: Profile picture (rounded-full, w-10 h-10), name, logout button
- Responsive: Show hamburger menu icon on mobile

### Dashboard Cards

**KPI Cards** (Admin):
- Grid layout: grid-cols-1 md:grid-cols-3 gap-6
- Each card: bg-white, rounded-lg, shadow-md, p-6
- Icon in accent color (top-left or inline)
- Large metric number (text-4xl font-bold)
- Label below (text-sm text-gray-600)
- Optional trend indicator (↑ green or ↓ red)

**Widget Cards** (Employee):
- Time Tracking: Clock-in/out buttons, total hours display
- Task List: Compact table/list with status badges (rounded-full pills)
- Chart Cards: Title + recharts visualization, bg-white, p-6

### Data Tables

**Structure**:
- Full-width responsive tables with rounded-lg container
- Header row: bg-gray-50, font-semibold, text-sm, uppercase
- Body rows: Striped (alternate bg-white/bg-gray-50) or hover:bg-gray-50
- Cell padding: px-6 py-4
- Actions column: Icons or mini buttons
- Search/filter bar above table (flex justify-between)

**Features**:
- Search input with icon (rounded-md, border-gray-300)
- Filter dropdowns/buttons
- Pagination controls at bottom

### Progress Indicators

**Progress Bars**:
- Container: bg-gray-200, rounded-full, h-2
- Fill: bg-primary or bg-accent, rounded-full, transition smoothly
- Percentage label adjacent (text-sm)

**Status Badges**:
- Pill-shaped: rounded-full px-3 py-1 text-xs font-medium
- Active/Complete: bg-green-100 text-green-800
- In Progress: bg-blue-100 text-blue-800
- Pending: bg-yellow-100 text-yellow-800

### Charts (Recharts)

**Chart Cards**:
- Card container with title (text-lg font-semibold mb-4)
- Bar charts for trends/comparisons
- Line charts for time-series data (productivity, hours)
- Pie charts for distribution (in reports)
- Primary color scheme matching brand

**Admin Reports Page**:
- Tabs for Weekly/Monthly views
- Side-by-side charts: grid-cols-1 lg:grid-cols-2

### AI Assistant Chat

**Layout**:
- Right-side panel or dedicated page
- Chat messages: Alternating left (assistant) and right (user) bubbles
- User messages: bg-primary text-white, rounded-lg
- Assistant messages: bg-gray-100 text-gray-900, rounded-lg
- Input box at bottom: Sticky, border-top, with send button

## Interactions & Animations

**Framer Motion**:
- Page transitions: Subtle fade-in (opacity 0 → 1, duration 0.3s)
- Card hover: Lift effect (scale 1.02, shadow increase)
- Button hover: Slight color darken, transform scale
- Sidebar menu items: Slide-in from left on active

**Buttons**:
- Primary: bg-primary, hover:bg-primary-dark, rounded-lg, px-4 py-2
- Secondary: border border-gray-300, hover:bg-gray-50
- Icon buttons: Circular or square with hover:bg-gray-100

## Responsive Behavior

**Breakpoints**:
- Mobile (< 768px): Sidebar hidden, hamburger menu, stacked cards
- Tablet (768px - 1024px): Sidebar visible, 2-column grids
- Desktop (> 1024px): Full layout, 3-column grids

**Mobile Optimizations**:
- Tables scroll horizontally
- KPI cards stack vertically
- Top navbar compresses (hide text labels, show icons)

## Images

**No hero images required** - this is a functional dashboard application.

**Profile Images**:
- User avatar in navbar: Rounded-full, w-10 h-10
- Employee list: Small thumbnails (w-8 h-8)
- Placeholder: Colored circles with initials if no image

**Icons**: Lucide React throughout for consistency (Users, Briefcase, Clock, BarChart, MessageSquare, LogOut, etc.)

## Accessibility

- Proper heading hierarchy (h1 → h2 → h3)
- Aria labels for icon-only buttons
- Focus states on interactive elements (ring-2 ring-primary)
- Color contrast meets WCAG AA standards
- Keyboard navigation support