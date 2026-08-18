**Xinyi Huang**

+86 17584950037 · [estella_fae_huang@163.com](mailto:estella_fae_huang@163.com) · Portfolio: [cute567.github.io](https://cute567.github.io)

## Education

**The University of Hong Kong**, MSc in Electrical and Computer Engineering, *Sep 2025 – Nov 2026*
- Key courses: Integrated Circuits, Analog Chip & Memory Design, AI and Edge Processors, Data Compression

**Beijing Jiaotong University**, BEng in Communication Engineering, *Sep 2021 – Jun 2025*
- GPA: 3.26/4.0 (top 17%); Academic Excellence Third-Class Scholarship
- Key courses: Digital Circuits, Analog Circuits, Circuit Analysis, Digital Signal Processing, Microcomputer Principles & Interfaces

## Internship Experience

**Bitmain** · *Jun 2026 – Present*

*Background:* Optimized the original iterative FP64 SQRT (13-cycle) and DIV (9-cycle) operators for the RandomX algorithm, refactoring them into a fixed 5-cycle, II=1 shared pipeline, and further pushed timing to 2.6 GHz.

*Work:*
- Rebuilt the FP64 DIV/SQRT datapath with Goldschmidt division and Newton-Raphson reciprocal square root using 57-bit Q2.55 fixed-point arithmetic, three high-precision LUTs, and candidate multiply-back verification; unified DIV and SQRT into a C0+5 fixed-latency, II=1 shared pipeline.
- Designed the C0–C5 five-stage pipeline with at most one 57×57 multiply per stage; used one candidate multiply, five parallel CSA remainder/midpoint paths, and four IEEE rounding modes to guarantee bit-exact FP64 results.
- Retargeted the division reciprocal LUT for 2.6 GHz and parallelized C5 rounding pre-computation; built directed tests, constrained-random vectors, SVA, and functional coverage.
- *Results:* Reduced SQRT latency from 13 to 5 cycles and DIV latency from 9 to 5 cycles with II=1; achieved zero setup violations at 2.4 GHz (5 nm, 0.75 V, 85°C) and further reached 2.6 GHz while preserving five-cycle latency, II=1, and bit-exact behavior.

## Project Experience

**Streaming Attention RTL Accelerator for Transformers** · *Oct 2025 – Jan 2026*

*Background:* Designed a block-wise streaming attention IP with online softmax to cut attention-score storage and data movement in Transformer inference, reusing an 8×8 systolic array for QK^T and PV.

*Work:*
- Implemented a shared 8×8 FP16 systolic array for QK^T and PV with online softmax, causal/padding masks, tile scheduling, and ready/valid handshaking; supports N=32/48/64/128 and d=32/64.
- Built a causal tile-skipping scheduler to bypass fully invalid KV tiles before QK^T, softmax, and PV; time-multiplexed row-sum units and FP32 multipliers to reduce duplicated arithmetic.
- Optimized RTL for 1.25 GHz with deeply pipelined FP multipliers, product FIFOs, high-fanout control splitting, staged MUXes, and shift-subtract/counter substitutes; established a Python golden model, VCS regression, 15 SVA checks, and functional coverage.
- *Results:* At N=64, d=32, skipped 28 invalid KV tiles and finished in 5,191 cycles (~31% fewer than 7,515 non-causal cycles); 11 E2E scenarios passed with 0 errors and 98.21% functional coverage; reduced online softmax mapped area from ~20,119 μm² to 16,079 μm² (~20%) on ASAP7 RVT TT, with 18.23% attention-specific area overhead over bare 8×8 GEMM.

## Skills

- **HDL:** Verilog, SystemVerilog, Python
- **ASIC Front-End:** RTL Design, Microarchitecture, Synthesis, Timing Optimization, SVA, Functional Coverage
- **EDA Tools:** VCS, Verdi, Design Compiler, Vivado, ModelSim, Cocotb
- **Other:** English — IELTS 6.5
