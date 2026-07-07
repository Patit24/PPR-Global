"use client";

import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type { projects } from "@/lib/content";

type Project = (typeof projects)[number];

export function ProjectCard({
  project,
  index,
  onOpenCaseStudy
}: {
  project: Project;
  index: number;
  onOpenCaseStudy?: () => void;
}) {
  const shouldReduceMotion = useReducedMotion();
  const hasContainedImage = "imageFit" in project && project.imageFit === "contain";
  const imagePosition =
    "imagePosition" in project && typeof project.imagePosition === "string"
      ? project.imagePosition
      : "center";

  return (
    <motion.article
      role={onOpenCaseStudy ? "button" : undefined}
      tabIndex={onOpenCaseStudy ? 0 : undefined}
      onClick={onOpenCaseStudy}
      onKeyDown={(event) => {
        if (!onOpenCaseStudy) {
          return;
        }
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onOpenCaseStudy();
        }
      }}
      className={`group relative w-[82vw] shrink-0 overflow-hidden rounded-lg bg-white/[0.045] outline-none shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)] focus-visible:ring-2 focus-visible:ring-acid focus-visible:ring-offset-2 focus-visible:ring-offset-ink md:w-[380px] lg:w-[405px] xl:w-[430px] ${
        onOpenCaseStudy ? "cursor-pointer" : ""
      }`}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24, filter: "blur(6px)" }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ type: "spring", duration: 0.62, bounce: 0, delay: index * 0.04 }}
      whileHover={shouldReduceMotion ? undefined : { y: -6 }}
    >
      <div
        className={`image-grain relative aspect-[1.08] overflow-hidden ${
          hasContainedImage ? "md:aspect-[1.85]" : "md:aspect-[1.62]"
        }`}
        style={{ background: project.image }}
      >
        {"imageSrc" in project && project.imageSrc ? (
          <motion.img
            src={project.imageSrc}
            alt={`${project.title} preview`}
            className={`absolute inset-0 h-full w-full transition-transform duration-500 ${
              hasContainedImage
                ? "scale-100 object-contain p-2 opacity-100 group-hover:scale-[1.025] md:p-3"
                : "scale-[1.16] object-cover opacity-90 group-hover:scale-[1.2]"
            }`}
            style={{ objectPosition: imagePosition ?? "center" }}
            loading={index === 0 ? "eager" : "lazy"}
          />
        ) : null}
        <div
          className={`absolute inset-0 ${
            hasContainedImage
              ? "bg-gradient-to-t from-black/18 via-transparent to-transparent"
              : "bg-gradient-to-t from-black/72 via-black/24 to-black/8"
          }`}
        />
        <motion.div
          className={`absolute inset-x-5 top-5 h-[36%] rounded-md border border-white/18 bg-black/20 backdrop-blur-[1px] md:h-[45%] ${
            hasContainedImage ? "hidden" : ""
          }`}
          whileHover={shouldReduceMotion ? undefined : { scale: 1.025 }}
          transition={{ type: "spring", duration: 0.5, bounce: 0 }}
        />
        <div
          className={`absolute bottom-4 left-4 right-4 items-end justify-between gap-4 ${
            hasContainedImage ? "hidden" : "flex"
          }`}
        >
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-white/70">{project.year}</p>
            <h3 className="mt-2 max-w-[13ch] font-display text-4xl font-semibold leading-none text-white md:text-[2.25rem]">
              {project.title}
            </h3>
          </div>
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white text-ink transition-colors duration-200 group-hover:bg-acid">
            <ArrowUpRight size={18} aria-hidden="true" />
          </div>
        </div>
      </div>
      <div className={hasContainedImage ? "space-y-3 p-4" : "space-y-3.5 p-4"}>
        {hasContainedImage ? (
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-white/50">{project.year}</p>
              <h3 className="mt-1 font-display text-2xl font-semibold leading-none text-white">
                {project.title}
              </h3>
            </div>
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white text-ink transition-colors duration-200 group-hover:bg-acid">
              <ArrowUpRight size={18} aria-hidden="true" />
            </div>
          </div>
        ) : null}
        <div className={hasContainedImage ? "hidden" : "flex flex-wrap gap-2"}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white/7 px-2.5 py-1 text-[0.68rem] font-medium uppercase tracking-[0.14em] text-white/72"
            >
              {tag}
            </span>
          ))}
        </div>
        {hasContainedImage ? null : (
          <p className="max-w-xl text-sm leading-6 text-white/68">{project.description}</p>
        )}
        {onOpenCaseStudy ? (
          <span
            className="inline-flex min-h-11 cursor-pointer items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-acid transition-colors group-hover:text-white"
          >
            View Case Study <ArrowUpRight size={16} aria-hidden="true" />
          </span>
        ) : (
          <a
            href="#contact"
            className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-acid outline-none transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-acid focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
          >
            View Case Study <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        )}
      </div>
    </motion.article>
  );
}
