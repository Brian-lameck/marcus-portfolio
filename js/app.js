/**
 * Marcus Josh Portfolio System Interface Controls
 * Production Architecture Framework Core logic
 */
document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================================================
       1. SINGLE PAGE ROUTING ENGINE WITH DYNAMIC HEADER STATES
       ========================================================================== */
    const navButtons = document.querySelectorAll(".nav-link");
    const footerButtons = document.querySelectorAll(".footer-nav-trigger");
    const sections = document.querySelectorAll(".viewport-view-section");
    const systemStatus = document.getElementById("system-status");

    const routeToSection = (targetSectionId) => {
        sections.forEach(section => section.classList.remove("active"));
        navButtons.forEach(btn => btn.classList.remove("active"));

        const targetView = document.getElementById(targetSectionId);
        if (targetView) {
            targetView.classList.add("active");
            
            navButtons.forEach(btn => {
                if (btn.getAttribute("data-target") === targetSectionId) {
                    btn.classList.add("active");
                }
            });

            // Update UI status bar metric labels dynamically based on section interaction
            if (systemStatus) {
                const labelNode = systemStatus.querySelector(".status-label");
                if (labelNode) {
                    labelNode.innerText = `SYS_ACTIVE // ${targetSectionId.toUpperCase().replace("-", "_")}`;
                }
            }

            targetView.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    navButtons.forEach(button => {
        button.addEventListener("click", () => {
            routeToSection(button.getAttribute("data-target"));
        });
    });

    footerButtons.forEach(button => {
        button.addEventListener("click", () => {
            routeToSection(button.getAttribute("data-target"));
        });
    });

    /* ==========================================================================
       2. REVISION CONTROL SIMULATION INTERACTION ENGINE
       ========================================================================== */
    const triggerStateA = document.getElementById("trigger-state-a");
    const triggerStateB = document.getElementById("trigger-state-b");
    const workbenchTarget = document.getElementById("workbench-dynamic-target-frame");

    if (triggerStateA && triggerStateB && workbenchTarget) {
        triggerStateA.addEventListener("click", () => {
            triggerStateB.classList.remove("active");
            triggerStateA.classList.add("active");
            
            workbenchTarget.innerHTML = `
                <div class="layer-component-simulation-card">
                    <span class="layer-uuid-tag">COMPONENT: HERO_PROTOTYPE_V1</span>
                    <h4>Primary Layout Anchor Wireframe</h4>
                    <div class="layer-tree-flex-row">
                        <div class="layer-node-box">CTA placement positioned inside upper screen real-estate fields.</div>
                        <div class="layer-node-box highlight-node-green">Typography tokens assigned across baseline variables.</div>
                    </div>
                </div>
            `;
        });

        triggerStateB.addEventListener("click", () => {
            triggerStateA.classList.remove("active");
            triggerStateB.classList.add("active");
            
            workbenchTarget.innerHTML = `
                <div class="layer-component-simulation-card" style="border-color: var(--accent-chromatic-orange);">
                    <span class="layer-uuid-tag" style="background-color: var(--accent-chromatic-orange);">STATE UPDATE // HERO_PROTOTYPE_V2</span>
                    <h4>Iterated High-Conversion Canvas Matrix</h4>
                    <div class="layer-tree-flex-row">
                        <div class="layer-node-box" style="border-color: var(--accent-electric-blue); color: var(--text-primary-pure);">✓ Auto-layout block modified to 48px padding to maximize vertical alignment integrity.</div>
                        <div class="layer-node-box">Secondary text fields compressed down for cleaner viewport space utilization.</div>
                    </div>
                </div>
            `;
        });
    }

    /* ==========================================================================
       3. VIDEO TIMELINE LOOP MONITOR RUNTIME SIMULATION
       ========================================================================== */
    const timelineProgress = document.getElementById("simulated-progress-line");
    const timeCodeOutput = document.getElementById("simulated-time-output");
    const playbackTrigger = document.getElementById("simulated-play-trigger");
    
    let currentProgressPct = 45;
    let baselinePlaybackActive = true;

    setInterval(() => {
        if (baselinePlaybackActive && timelineProgress && timeCodeOutput) {
            currentProgressPct += 0.3;
            if (currentProgressPct > 100) currentProgressPct = 0;
            
            timelineProgress.style.width = `${currentProgressPct}%`;
            const currentFrameIndex = Math.floor(currentProgressPct * 0.24);
            timeCodeOutput.innerText = `00:14:${currentFrameIndex < 10 ? '0' + currentFrameIndex : currentFrameIndex}`;
        }
    }, 100);

    if (playbackTrigger) {
        playbackTrigger.addEventListener("click", () => {
            baselinePlaybackActive = !baselinePlaybackActive;
            if (!baselinePlaybackActive) {
                playbackTrigger.innerText = "▶ RUN LOOP PREVIEW";
                playbackTrigger.style.color = "var(--text-primary-pure)";
            } else {
                playbackTrigger.innerText = "■ STOP SIMULATION";
                playbackTrigger.style.color = "var(--accent-chromatic-orange)";
            }
        });
    }

    /* ==========================================================================
       4. GLOBAL PORTFOLIO IMAGE LIGHTBOX OVERLAY ENGINE
       ========================================================================== */
    const lightboxModal = document.getElementById("studio-lightbox-modal");
    const lightboxImgTarget = document.getElementById("lightbox-target-image");
    const lightboxCloseBtn = document.getElementById("lightbox-close-btn");
    const clickableViewports = document.querySelectorAll(".card-media-viewport:not(.glass-interior)");

    clickableViewports.forEach(viewport => {
        viewport.addEventListener("click", () => {
            const imageAssetSource = viewport.querySelector("img")?.getAttribute("src");
            if (imageAssetSource && lightboxModal && lightboxImgTarget) {
                lightboxImgTarget.setAttribute("src", imageAssetSource);
                lightboxModal.classList.add("visible-state");
                lightboxModal.setAttribute("aria-hidden", "false");
            }
        });
    });

    if (lightboxCloseBtn && lightboxModal) {
        lightboxCloseBtn.addEventListener("click", () => {
            lightboxModal.classList.remove("visible-state");
            lightboxModal.setAttribute("aria-hidden", "true");
        });
        
        lightboxModal.addEventListener("click", (e) => {
            if (e.target === lightboxModal) {
                lightboxModal.classList.remove("visible-state");
                lightboxModal.setAttribute("aria-hidden", "true");
            }
        });
    }

    /* ==========================================================================
       5. ROBUST FORM INPUT GATEWAY INTERCEPTOR & VALIDATION
       ========================================================================== */
    const intakeForm = document.getElementById("portfolio-intake-form");
    const successFeedback = document.getElementById("form-success-alert");

    if (intakeForm) {
        intakeForm.addEventListener("submit", (event) => {
            event.preventDefault();
            
            let formStateIsValid = true;
            const inputFields = intakeForm.querySelectorAll("input, textarea");

            inputFields.forEach(field => {
                const groupParent = field.closest(".form-input-group");
                
                if (!field.value.trim()) {
                    formStateIsValid = false;
                    groupParent.classList.add("invalid-state");
                } else if (field.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) {
                    formStateIsValid = false;
                    groupParent.classList.add("invalid-state");
                } else {
                    groupParent.classList.remove("invalid-state");
                }
            });

            if (formStateIsValid) {
                if (successFeedback) {
                    successFeedback.style.display = "block";
                    intakeForm.reset();
                    setTimeout(() => { successFeedback.style.display = "none"; }, 6000);
                }
            }
        });

        intakeForm.querySelectorAll("input, textarea").forEach(input => {
            input.addEventListener("input", () => {
                const groupParent = input.closest(".form-input-group");
                if (input.value.trim()) {
                    groupParent.classList.remove("invalid-state");
                }
            });
        });
    }

    /* ==========================================================================
       6. GLOBAL THEME MANAGER SWITCHER (LIGHT/DARK)
       ========================================================================== */
    const themeToggleBtn = document.getElementById("theme-toggle");
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", () => {
            document.body.classList.toggle("light-theme");
            document.body.classList.toggle("dark-theme");
        });
    }
});