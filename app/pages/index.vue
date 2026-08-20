<script setup lang="ts">
import type { ButtonProps, PageFeatureProps, TimelineItem } from "@nuxt/ui";

const { data: page } = await useAsyncData(() =>
  queryCollection("index").first(),
);

console.log(page);

useSeoMeta({
  title: page.value?.seo.title,
  ogTitle: page.value?.seo.title,
  description: page.value?.seo.description,
  ogDescription: page.value?.seo.description,
});

const links = ref<ButtonProps[]>([
  {
    to: "https://www.linkedin.com/in/ali-sunjaya-6b8b54141/",
    target: "_blank",
    icon: "i-lucide-linkedin",
  },
  {
    to: "https://github.com/sunjayaali",
    target: "_blank",
    icon: "i-lucide-github",
  },
]);

const timelineItems = [
  {
    date: "Jul, 2025 - Present",
    title: "Ioizz, Jakarta, Indonesia",
    role: "Fullstack Engineer",
    description:
      "Ioizz is a personal project focused on exploring end-to-end mobile development and building a cross-platform Chinese language learning application.",
    highlights: [
      "Developed a cross-platform application for learning Chinese characters through interactive stroke-order practice.",
      "Built backend services and APIs using Go.",
      "Implemented application observability with Grafana, Prometheus, Loki, and Datadog.",
      "Managed infrastructure and deployment using Terraform.",
    ],
    tags: [
      "Go",
      "Flutter",
      "Grafana",
      "Prometheus",
      "Loki",
      "Datadog",
      "Terraform",
    ],
  },
  {
    date: "Jun, 2024 - Jul, 2025",
    title: "PT Jaya Agung Teknologi, Jakarta, Indonesia",
    role: "Backend Engineer",
    description:
      "Jaya Agung Teknologi is a digital application vendor focused on the gaming sector. As a Backend Engineer, I worked on backend services and third-party integrations supporting the company's gaming applications.",
    highlights: [
      "Integrated five external providers that collectively contributed approximately 50% of company revenue, equivalent to around IDR 36 billion.",
    ],
    tags: [
      "Go",
      "Python",
      "JavaScript",
      "Redis",
      "RabbitMQ",
      "PostgreSQL",
      "Google Cloud",
    ],
  },
  {
    date: "Mar, 2023 - Jun, 2024",
    title: "PT Clarus Innovate Teknologi, Jakarta, Indonesia",
    role: "Full Stack Engineer",
    description:
      "Clarus Innovate Teknologi provides end-to-end enterprise solutions across data center and cloud infrastructure, digital platforms, managed services, and consulting. As a Full Stack Engineer, I worked on an insurance brokerage platform, focusing on application development, API integration, CI automation, and system monitoring.",
    highlights: [
      "Completed the batch processing module for an insurance brokerage platform.",
      "Developed APIs using API Platform to enable integration with external insurance providers, with Swagger documentation.",
      "Established a CI pipeline with GitLab Runner to automate unit testing, static analysis, and linting.",
      "Implemented application and server monitoring using Grafana.",
    ],
    tags: [
      "PHP",
      "Symfony",
      "PostgreSQL",
      "API Platform",
      "Swagger",
      "GitLab Runner",
      "Grafana",
    ],
  },
  {
    date: "Mar, 2019 - Jan, 2023",
    title: "PT Fazz Financial Group, Jakarta, Indonesia & Singapore",
    role: "Backend Engineer",
    description:
      "Fazz Financial provides financial services for micro and small businesses, offering accessible payment solutions, wholesale purchases, and business financing. As a Backend Engineer, I worked on payment systems, microservices, internal platforms, fraud prevention, and system observability across the company’s applications.",
    highlights: [
      "Migrated and restructured the legacy coupon system from Node.js monolith to a reusable Go microservice.",
      "Built an internal SSO-like authentication and role-management system for multiple applications.",
      "Integrated OneKlik BCA as a new payment method for the Fazz Agen application.",
      "Implemented application and business monitoring with Prometheus and Grafana, tracking requests, error rates, latency, and key business metrics.",
      "Migrated the cashback module from monolith to Go microservice, later transitioning it to Ruby on Rails with SNS/SQS.",
      "Developed Fazz Level, a gamification feature designed to encourage continued user transactions.",
      "Integrated DataVisor for device risk scoring to support fraud prevention and reduce account-takeover risks.",
      "Implemented Datadog monitoring using structured logs to improve system reliability, SLA visibility, and business metric tracking.",
    ],
    tags: [
      "Node.js",
      "Go",
      "Ruby on Rails",
      "PostgreSQL",
      "MySQL",
      "Prometheus",
      "Grafana",
      "Datadog",
      "SQS/SNS",
      "Google Pub/Sub",
    ],
  },
  {
    date: "Jan, 2018 - Mar, 2019",
    title: "PT Futuready Insurance Broker, Jakarta, Indonesia",
    role: "Backend Engineer",
    description:
      "Futuready is an OJK-licensed insurance broker and one of Indonesia’s early online insurance platforms. As a Backend Engineer, I worked on internal applications, partner integrations, and the development of a new serverless core system.",

    highlights: [
      "Developed an internal attendance system that automated employee absence data processing for the HR team.",
      "Restructured the UI of internal applications to improve usability and consistency.",
      "Developed APIs for e-commerce partners such as RupaRupa and OLX to expand sales channels.",
      "Developed microservices for a new core insurance system using Node.js and a serverless architecture.",
    ],
    tags: [
      "PHP",
      "CodeIgniter",
      "MariaDB",
      "MySQL",
      "Bootstrap",
      "jQuery",
      "Node.js",
      "AWS Lambda",
    ],
  },
  {
    date: "Feb, 2016 - May, 2018",
    title: "PT Sqiva Sistem, Jakarta, Indonesia",
    role: "Software Engineer",
    description:
      "Sqiva is an IT solutions company focused on web-based reservation and ticketing systems for transportation companies. As a Software Engineer, I worked across backend development, B2B and B2C platforms, infrastructure, and application maintenance.",
    highlights: [
      "Developed a billing system that automated invoice generation by collecting and calculating transaction data based on finance team inputs.",
      "Developed an internal ticketing system to manage client requests, support issues, and developer task assignments.",
      "Developed a Global Distribution System (GDS) that aggregated ticket availability from transportation providers such as Kereta Api Indonesia, Sriwijaya Air, and Citilink, enabling B2B partners to search and book tickets.",
      "Developed APIs for B2B partners such as JD.ID and Panorama to integrate with the ticketing platform.",
      "Developed an Internet Booking Engine (IBE) that enabled clients to provide their own B2C booking applications and expand their sales channels.",
      "Set up and maintained CentOS servers, including application deployment, configuration, and backup planning for applications and databases.",
      "Created reusable project templates covering database connections, backend and frontend structure, and security practices to accelerate new project setup.",
      "Maintained and improved existing applications through security enhancements, server monitoring, query optimization, and overall system quality improvements.",
    ],
    tags: [
      "PHP",
      "Yii2",
      "Perl",
      "PL/SQL",
      "Oracle Database",
      "Redis",
      "Bootstrap",
      "Nginx",
      "jQuery",
      "SVN",
    ],
  },
] satisfies TimelineItem[];

const skills = [
  {
    title: "Languages",
    icon: "i-lucide-code-2",
    items: [
      "Go",
      "PHP",
      "JavaScript",
      "TypeScript",
      "Python",
      "Ruby",
      "SQL",
      "Dart",
    ],
  },
  {
    title: "Frameworks",
    icon: "i-lucide-layers-3",
    items: ["Flutter", "Symfony", "CodeIgniter", "Yii2", "Ruby on Rails"],
  },
  {
    title: "Databases",
    icon: "i-lucide-database",
    items: ["PostgreSQL", "MySQL", "MariaDB", "Oracle", "Redis"],
  },
  {
    title: "Cloud & Infrastructure",
    icon: "i-lucide-cloud",
    items: ["Google Cloud", "AWS", "Terraform", "Docker", "Nginx", "Linux"],
  },
  {
    title: "Observability & Messaging",
    icon: "i-lucide-activity",
    items: [
      "Prometheus",
      "Grafana",
      "Loki",
      "Datadog",
      "RabbitMQ",
      "AWS SQS/SNS",
      "Google Pub/Sub",
    ],
  },
];
</script>

<template>
  <UPageHero
    :ui="{
      headline: 'text-success',
    }"
    orientation="horizontal"
    :title="page?.title"
    :description="page?.description"
    headline="Available for new projects"
    :links="links"
  >
    <template #headline>
      <div class="flex items-center gap-2">
        <div class="relative size-2">
          <span class="bg-success absolute inset-0 animate-ping rounded-full" />
          <span class="bg-success relative block size-2 rounded-full" />
        </div>

        <span>Available for new projects</span>
      </div>
    </template>

    <img src="/images/pp.jpg" alt="Description" />
  </UPageHero>

  <UPageSection
    id="experience"
    title="Experience"
    description="My professional journey building applications, backend services, and infrastructure across different industries and technologies."
  >
    <UTimeline :items="timelineItems">
      <template #title="{ item }">
        <div class="font-semibold">
          {{ item.title }}
        </div>

        <div class="text-sm text-muted">
          {{ item.role }}
        </div>
      </template>
      <template #description="{ item }">
        <div class="flex flex-wrap gap-2">
          <div class="space-y-3">
            <p>
              {{ item.description }}
            </p>

            <ul class="space-y-2">
              <li
                v-for="highlight in item.highlights"
                :key="highlight"
                class="flex gap-2 text-sm text-muted"
              >
                <UIcon
                  name="i-lucide-check"
                  class="mt-0.5 size-4 shrink-0 text-primary"
                />
                <span>{{ highlight }}</span>
              </li>
            </ul>

            <div class="flex flex-wrap gap-2">
              <UBadge v-for="tag in item.tags" :key="tag" variant="outline">
                {{ tag }}
              </UBadge>
            </div>
          </div>
        </div>
      </template>
    </UTimeline>
  </UPageSection>

  <UPageSection
    id="skills"
    title="Skills"
    description="Technologies and tools I work with."
  >
    <UPageGrid>
      <UCard v-for="skill in skills" :key="skill.title">
        <div class="flex items-center gap-2">
          <UIcon :name="skill.icon" class="size-5 text-primary" />

          <h3 class="font-semibold">
            {{ skill.title }}
          </h3>
        </div>

        <div class="mt-4 flex flex-wrap gap-2">
          <UBadge v-for="item in skill.items" :key="item" variant="subtle">
            {{ item }}
          </UBadge>
        </div>
      </UCard>
    </UPageGrid>
  </UPageSection>
</template>
