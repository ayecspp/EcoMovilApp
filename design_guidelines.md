# EcoResiduos Mobile App - Design Guidelines

## Design Foundation

**Framework**: Material Design with eco-friendly customization
- Rounded organic shapes for environmental authenticity
- Mobile-first, touch-optimized patterns
- Progressive disclosure for complex flows

**Core Principles**: Clarity first | Touch-friendly (min 44px targets) | Environmental authenticity

---

## Typography

**Font**: Inter (Google Fonts) → system-ui fallback

**Scale**:
- Hero: `text-3xl font-bold leading-tight` (30px)
- Headers: `text-2xl font-semibold` (24px)
- Cards: `text-xl font-semibold` (20px)
- Body: `text-base leading-relaxed` (16px)
- Labels: `text-sm font-medium` (14px)
- Captions: `text-xs` (12px)

**Emphasis**: semibold (headers/actions) | medium (labels/nav) | bold (hero/CTAs only)

---

## Layout

**Spacing**: Use 2, 4, 6, 8, 12, 16 units
- Micro (related): `space-y-2, gap-2`
- Component: `p-4` or `p-6`
- Section: `py-8` or `py-12`
- Screen: `px-4` mobile, `px-6` larger

**Container**: Full-width with `max-w-md` inner, `pt-safe-area-inset-top` for iOS

**Grids**: Single column default | `grid-cols-2 gap-3` for material selection | `space-y-4` for card lists

---

## Components

### Navigation

**Bottom Tabs** (Primary):
- `h-16` with safe area padding
- 4-5 sections: Home, Pickups, Map, Points, Profile
- Heroicons: outline (inactive) / solid (active)
- Active: icon fill + subtle indicator

**App Bar**: `h-14`, centered/left title, back chevron, action icons right, `shadow-sm`

### Cards

**Material Selection**:
- `rounded-2xl p-4 grid-cols-2 gap-3`
- 64px icon + label, checkable border state
- Types: Plastic, Glass, Paper, Metal, Electronics, Organic

**Info Cards**: `rounded-xl p-6 shadow-md` | icon+title header | `space-y-3` body | optional action footer

**Map Markers**: Custom by type, clustered, tap for info window

### Forms

**Multi-Step Pattern**:
- Progress indicator (1/3, 2/3, 3/3)
- One question per screen
- Bottom action bar with "Continue" CTA

**Inputs**:
- `h-12 rounded-lg` with label above (`text-sm font-medium mb-2`)
- Helper text: `text-xs` below
- Error: icon + message

**Quantity**: Stepper (−/number/+) or slider with visible value

**Location Picker**: `h-64` map + "Use Current Location" + search + confirm button

### Buttons

**Primary CTA**: `w-full h-12 rounded-lg font-semibold shadow-lg`
**Secondary**: Outlined `border-2`, transparent background, same height
**Icon**: `h-10 w-10 rounded-full` for toolbar/cards
**FAB**: `h-14 w-14 rounded-full shadow-2xl` at `bottom-20 right-4`

### Points & Gamification

**Points Display**: `text-4xl font-bold` number + `text-sm` label + circular progress + icon card
**Badges**: `h-16 w-16` circular, `grid-cols-3 gap-4`, icon + `text-xs` label
**Progress**: `h-2/h-3 rounded-full` animated, current/total labels

### QR Scanner

Full screen overlay, corner guides, top instruction, corner cancel, success animation

### Calendar & Events

**Calendar**: Month view, event dots, date highlighting, event list below
**Event Cards**: Date badge left, title+description, location icon, "Add to Calendar"

### Maps

**Interactive**: `h-96` or `h-screen`, custom markers (color-coded containers, truck icon for mobile points, calendar for events), filter chips top, bottom sheet details

**Request**: Single draggable marker, address overlay, confirm button

### Notifications

**In-App**: Top banner, slide-down, icon+message+action, 5s auto-dismiss
**List**: Time-grouped, unread dot, swipe to dismiss

### Educational

**Articles**: Hero image, `text-2xl font-bold` title, reading time, share action
**Tips**: Small icon cards, horizontal scroll carousel, "Learn More"

---

## Screen Patterns

### Home/Dashboard
1. **Header** (`py-6`): Greeting + points balance card
2. **Quick Actions** (`py-4`): Horizontal scroll—"Request Pickup", "Scan QR", "Find Container"
3. **Upcoming** (`py-4`): Next collection + materials + countdown
4. **Activity** (`py-4`): Recent pickups/points + "See all"

### Pickup Request Flow

**Step 1 - Materials**: Grid of material cards (2 col), multi-select, continue button
**Step 2 - Quantity**: Per material—icon + stepper/slider, back + continue
**Step 3 - Location**: Map picker + address + "Use location" + time (optional) + submit
**Confirmation**: Success animation + summary + reference + points + "Track"/"Done"

### Map Screen
Full map + search bar + filter chips + legend (collapsible) + "Center on me" FAB + bottom sheet (type, materials, schedule, distance, directions)

### Points/Rewards
1. **Summary**: Total (large) + tier progress + recent
2. **Rewards**: Card grid, points required, "Redeem", merchant logo
3. **History**: Timeline of earned/spent

### Events
Calendar widget + selected date events below (date badge, title, location+map preview, RSVP)

---

## Images

**Types**: Onboarding illustrations (3 screens) | Material icons (Heroicons/SVG) | Empty states | Educational photos | Success celebrations

**Treatment**: `rounded-xl` content | 16:9 events | 1:1 profile/badges | shimmer placeholders

---

## Accessibility & Polish

- **Touch**: Min `h-11 w-11` interactive
- **Focus**: Clear outline for keyboard
- **Loading**: Skeleton loaders
- **Errors**: Inline validation with helpful messages
- **Offline**: Cached data with indicator
- **Safe Areas**: Account for notches/corners

---

## Animation

**Use**: Screen transitions (slide) | Bottom sheets (slide up) | Success (scale+fade) | Micro-interactions (subtle scale)
**Avoid**: Scroll effects | Decorative animations | Loading spinners (use progress bars)

---

## Critical Implementation Notes

- All interactive elements MUST meet 44px minimum touch target
- Material selection cards MUST support multi-select with clear visual feedback
- Map markers MUST be color-coded by material type for quick scanning
- Forms MUST show progress clearly and allow back navigation without data loss
- Points display MUST be prominent on home screen to drive engagement
- Offline mode MUST cache recent data and show clear offline indicator