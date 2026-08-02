/* AI-103 canonical objective domain — all 64 measurable skills.
 *
 * Source of truth: https://learn.microsoft.com/credentials/certifications/resources/study-guides/ai-103
 * Fetched and verified 2026-08-01 through the ai103buddy-mslearn MCP server.
 * "Skills measured as of" date on the live page: April 16, 2026.
 *
 * Text is VERBATIM from the study guide, except that non-ASCII punctuation is
 * normalized to plain ASCII per repo style (en dash -> hyphen, non-breaking
 * hyphen -> plain hyphen).
 *
 * This file is what makes question RELEVANCE machine-checkable: tools/validate-bank.mjs
 * fails any item whose `objective` id is not in this list, whose `domain` disagrees
 * with the id, or whose `objectiveText` is not a verbatim match.
 *
 * If Microsoft updates the study guide, re-fetch it, update this file and
 * .claude/skills/_references/ai103-objective-domain.md in the same change, then
 * re-run the validator.
 */

const STUDY_GUIDE = {
  url: "https://learn.microsoft.com/credentials/certifications/resources/study-guides/ai-103",
  examUrl: "https://learn.microsoft.com/credentials/certifications/exams/ai-103",
  skillsMeasuredAsOf: "April 16, 2026",
  verified: "2026-08-01",
  passScore: 700,
  skillCount: 64
};

const DOMAIN_META = {
  1: { name: "Plan and manage an Azure AI solution",          weight: "25-30%", low: 25, high: 30 },
  2: { name: "Implement generative AI and agentic solutions", weight: "30-35%", low: 30, high: 35 },
  3: { name: "Implement computer vision solutions",           weight: "10-15%", low: 10, high: 15 },
  4: { name: "Implement text analysis solutions",             weight: "10-15%", low: 10, high: 15 },
  5: { name: "Implement information extraction solutions",    weight: "10-15%", low: 10, high: 15 }
};

const SUBAREAS = {
  "1.1": "Choose the appropriate Foundry services for generative AI and agents",
  "1.2": "Set up AI solutions in Foundry",
  "1.3": "Manage, monitor, and secure AI systems",
  "1.4": "Implement responsible AI across generative AI and agentic systems",
  "2.1": "Build generative applications by using Foundry",
  "2.2": "Build agents by using Foundry",
  "2.3": "Optimize and operationalize generative AI systems",
  "3.1": "Design and implement image- and video-generation solutions",
  "3.2": "Design and implement multimodal understanding workflows",
  "3.3": "Implement responsible AI for multimodal content",
  "4.1": "Apply language model text analysis",
  "4.2": "Implement speech solutions",
  "5.1": "Build retrieval and grounding pipelines",
  "5.2": "Extract content from documents"
};

/* id -> verbatim measurable-skill bullet */
const OBJECTIVES = {
  // Domain 1 - Plan and manage an Azure AI solution (25-30%)
  "1.1.1": "Choose an appropriate model for each task, including large language models (LLMs), small language models, multimodal models, and Foundry Tools",
  "1.1.2": "Choose the appropriate Foundry services for generative tasks, grounding, vector search, agent workflows, or multimodal processing",
  "1.1.3": "Choose an appropriate method for retrieval and indexing",
  "1.1.4": "Choose appropriate memory, tool, and knowledge integration services for agent solutions",
  "1.2.1": "Design Azure infrastructure for AI apps and agent-based solutions",
  "1.2.2": "Choose appropriate deployment options",
  "1.2.3": "Configure model and agent deployments",
  "1.2.4": "Integrate Foundry projects with continuous integration and continuous deployment (CI/CD) pipelines",
  "1.3.1": "Manage quotas, scaling, rate limits, and cost footprints for model and agent workloads",
  "1.3.2": "Monitor model performance, drift, safety events, and grounding quality",
  "1.3.3": "Monitor data ingestion quality, search index health, and relevance performance",
  "1.3.4": "Configure security, including managed identity, private networking, keyless credentials, and role policies",
  "1.4.1": "Configure safety filters, guardrails, risk detection, and content moderation",
  "1.4.2": "Apply responsible AI instrumentation, including evaluators, safety evaluations, and explanation tooling",
  "1.4.3": "Implement auditing through trace logging, provenance metadata, and approval workflows",
  "1.4.4": "Govern agent behavior with oversight modes, constraints, and tool-access controls",

  // Domain 2 - Implement generative AI and agentic solutions (30-35%)
  "2.1.1": "Deploy and consume LLMs, small models, code models, and multimodal models",
  "2.1.2": "Implement retrieval-augmented generation (RAG) in an application",
  "2.1.3": "Design workflows, tool-augmented flows, and multistep reasoning pipelines",
  "2.1.4": "Evaluate models and apps, including detecting fabrications, relevance, quality, and safety",
  "2.1.5": "Integrate generative workflows into applications by using Foundry SDKs and connectors",
  "2.1.6": "Configure an application to connect to a Foundry project",
  "2.2.1": "Define agent roles, goals, conversation-tracking approach, and tool schemas",
  "2.2.2": "Build agents that integrate retrieval, function-calling, and conversation memory",
  "2.2.3": "Integrate agent tools, including APIs, knowledge stores, search, content understanding, and custom functions",
  "2.2.4": "Implement orchestrated multi-agent solutions",
  "2.2.5": "Build autonomous or semiautonomous workflows with safeguards and approval flow controls",
  "2.2.6": "Integrate monitoring into deployed agents, evaluate agent behavior, and perform error analysis",
  "2.3.1": "Tune generation behavior, such as prompt engineering and adjusting model parameters",
  "2.3.2": "Implement model reflection, chain-of-thought evaluations, and self-critique loops",
  "2.3.3": "Set up observability by implementing tracing, token analytics, safety signals, and latency breakdowns",
  "2.3.4": "Orchestrate multiple models, flows, or hybrid LLM and rules engines",

  // Domain 3 - Implement computer vision solutions (10-15%)
  "3.1.1": "Implement a solution that generates images from text prompts and reference media",
  "3.1.2": "Implement a solution that generates videos from text prompts and reference media",
  "3.1.3": "Configure image-editing workflows, including inpainting, mask-based edits, and prompt-driven modifications",
  "3.1.4": "Implement workflows to edit generated videos",
  "3.1.5": "Select and apply appropriate generation and editing controls provided by the platform",
  "3.2.1": "Build a solution that analyzes visual context by using multimodal models",
  "3.2.2": "Configure apps to produce concise or detailed captions for single or multiple images",
  "3.2.3": "Implement a solution that enables question-answering grounded in visual evidence",
  "3.2.4": "Configure generation of alt-text and extended image descriptions aligned to accessibility guidelines",
  "3.2.5": "Implement visual understanding by configuring Azure Content Understanding in Foundry Tools to extract visual characteristics",
  "3.2.6": "Implement video analysis workflows to process and interpret video segments",
  "3.2.7": "Configure single-task and pro-mode Content Understanding pipelines",
  "3.2.8": "Implement solutions that identify objects, components, or regions within images or video",
  "3.3.1": "Implement filters to classify unsafe or disallowed visual content",
  "3.3.2": "Detect and mitigate indirect prompt injection by using embedded text in images",
  "3.3.3": "Enforce visual policy rules, such as applying watermarks, flagging prohibited symbols, upholding brand usage requirements, and detecting potentially inappropriate content",

  // Domain 4 - Implement text analysis solutions (10-15%)
  "4.1.1": "Implement solutions to extract entities, topics, summaries, and structured JSON outputs by using generative prompting and Foundry Tools",
  "4.1.2": "Configure detection of sentiment, tone, safety issues, and sensitive content",
  "4.1.3": "Build solutions that translate text by using Azure Translator in Foundry Tools or LLM-powered translation flows",
  "4.1.4": "Customize language model outputs for domain tasks, such as compliance summarization and domain extraction",
  "4.2.1": "Implement workflows to convert speech to text and text to speech for agentic interactions",
  "4.2.2": "Integrate speech as an agent modality, including custom speech models",
  "4.2.3": "Enable multimodal reasoning from audio inputs",
  "4.2.4": "Translate speech into other languages by using language models and Foundry Tools",

  // Domain 5 - Implement information extraction solutions (10-15%)
  "5.1.1": "Ingest and index content, such as documents, images, audio, and video",
  "5.1.2": "Configure semantic search, hybrid search, and vector search for grounding",
  "5.1.3": "Implement enrichment by using custom or built-in skills for text, images, and layout",
  "5.1.4": "Configure RAG ingestion flow, including documents and using optical character recognition (OCR)",
  "5.1.5": "Connect retrieval pipelines directly to workflows and agent tools",
  "5.2.1": "Extract information by using multimodal pipelines that combine OCR, layout analysis, and field extraction",
  "5.2.2": "Produce clean, grounded representations to use with agents and RAG by using Content Understanding",
  "5.2.3": "Implement analyzers for generating structured or markdown outputs for downstream reasoning by using Content Understanding"
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = { STUDY_GUIDE, DOMAIN_META, SUBAREAS, OBJECTIVES };
}
