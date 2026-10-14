
const projects = [
  {
    id: 'mobility-hub',
    category: 'Commissioned Projects',
    title: 'Mobility Hub research for Municipality of Utrecht',
    image: 'assets/commissioned-1.png',
    pdf: 'projects/mobility-hub.pdf',
    href: 'commissioned-1.html'
  },
  {
    id: 'msc-2',
    category: 'MSc Projects',
    title: 'Collaboration in Urban Densification',
    image: 'assets/msc-2.png',
    pdf: 'projects/msc-2.pdf',
    href: 'msc-2.html'
  },
  {
    id: 'msc-1',
    category: 'MSc Projects',
    title: 'Participatory Mapping — Understanding Gentrification',
    image: 'assets/msc-1.png',
    pdf: 'projects/msc-1.pdf',
    href: 'msc-1.html'
  },
  {
    id: 'ix-game',
    category: 'Commissioned Projects',
    title: 'Concept Development & Design Sketches for IX Game',
    image: 'assets/commissioned-3.png',
    pdf: 'projects/ix-game.pdf',
    href: 'commissioned-3.html'
  },
  {
    id: 'msc-3',
    category: 'MSc Projects',
    title: 'Just Energy Transition — Bridging Communities and Institutions',
    image: 'assets/msc-3.png',
    pdf: 'projects/msc-3.pdf',
    href: 'msc-3.html'
  },
  {
    id: 'energy-grid',
    category: 'Commissioned Projects',
    title: 'Energy Grid Analysis for real estate projects',
    image: 'assets/commissioned-2.png',
    pdf: 'projects/energy-grid.pdf',
    href: 'commissioned-2.html'
  },
  {
    id: 'other-2',
    category: 'Other Projects',
    title: 'Female Interaction Design for TomTom',
    image: 'assets/other-2.png',
    pdf: 'projects/other-2.pdf',
    href: 'other-2.html'
  },
  {
    id: 'other-3',
    category: 'Other Projects',
    title: 'Social entrepreneurship in Zanzibar, Tanzania',
    image: 'assets/other-3.png',
    pdf: 'projects/other-3.pdf',
    href: 'other-3.html'
  },
  {
    id: 'interactive-explainers',
    category: 'Commissioned Projects',
    title: 'Interactive Explainers for Dutch Metropolitan Innovations',
    image: 'assets/commissioned-4.png',
    pdf: 'projects/interactive-explainers.pdf',
    href: 'commissioned-4.html'
  },
  {
    id: 'other-1',
    category: 'Other Projects',
    title: 'Root Hunt — From Drawing to Playable Game   ',
    image: 'assets/other-1.png',
    pdf: 'projects/other-1.pdf',
    href: 'other-1.html'
  },
  {
    id: 'msc-4',
    category: 'MSc Projects',
    title: 'Zaanstraat — Visualising a New Neighbourhood',
    image: 'assets/msc-4.png',
    pdf: 'projects/msc-4.pdf',
    href: 'msc-4.html'
  }
];

document.addEventListener("DOMContentLoaded", function () {

  // Only show navigation on individual project pages
  const hero = document.querySelector(".project-hero");

  if (!hero) return;

  // Identify the current project
  const currentPage = window.location.pathname.split("/").pop();

  const currentIndex = projects.findIndex(
    project => project.href === currentPage
  );

  if (currentIndex === -1) return;

  // Find previous and next projects
  const previousIndex =
    (currentIndex - 1 + projects.length) % projects.length;

  const nextIndex =
    (currentIndex + 1) % projects.length;

  const previous = projects[previousIndex];
  const next = projects[nextIndex];

  // Create navigation container
  const navigation = document.createElement("nav");

  navigation.className = "project-top-navigation";
  navigation.setAttribute("aria-label", "Project navigation");

  // Previous project link
  const previousLink = document.createElement("a");

  previousLink.href = previous.href;
  previousLink.textContent = "← PREVIOUS PROJECT";

  // Next project link
  const nextLink = document.createElement("a");

  nextLink.href = next.href;
  nextLink.textContent = "NEXT PROJECT →";

  // Add links to navigation
  navigation.appendChild(previousLink);
  navigation.appendChild(nextLink);

  // Place navigation above the large project image
  hero.parentNode.insertBefore(navigation, hero);

  // Navigation styling
  const style = document.createElement("style");

  style.textContent = `
    .project-top-navigation {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 20px;
      width: 100%;
      margin-bottom: 18px;
    }

    .project-top-navigation a {
      font-family: Arial, Helvetica, sans-serif;
      font-size: clamp(14px, 1.3vw, 18px);
      font-weight: 400;
      font-style: normal;
      letter-spacing: -.05em;
      color: #111;
      text-decoration: none;
    }

    .project-top-navigation a:hover,
    .project-top-navigation a:focus-visible {
      font-weight: 700;
      font-style: italic;
    }

    .project-top-navigation a:last-child {
      text-align: right;
    }

    @media (max-width: 700px) {
      .project-top-navigation {
        gap: 12px;
        margin-bottom: 14px;
      }

      .project-top-navigation a {
        font-size: 13px;
      }
    }
  `;

  document.head.appendChild(style);

});
