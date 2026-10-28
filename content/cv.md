**Xinyi Huang**

+86 17584950037 · [estella_fae_huang@163.com](mailto:estella_fae_huang@163.com) · Portfolio: [cute567.github.io](https://cute567.github.io)

## Education

**The University of Hong Kong**, Master's in Electrical and Electronic Engineering, *Sep 2025 – Nov 2026*
- GPA: 3.36/4.00; Electrical and Electronic Engineering Scholarship
- Courses: Integrated Circuits, Chip & Memory Design, AI and Edge Processors, Data Compression

**Beijing Jiaotong University**, B.Eng. in Communication Engineering, *Sep 2021 – Jun 2025*
- GPA: 3.26/4.0 (Top 17%); Third-Class Academic Excellence Scholarship
- Courses: Digital Circuits, Analog Circuits, Digital Signal Processing, Microprocessor Principles & Interfacing

## Internship Experience

**Bitmain** · *Jun 2026 – Present*

*Objective:* Contributing to optimized FP64 arithmetic and on-chip NoC/DDR data-path architecture for a RandomX virtual-machine workload.

*FP64 Division / Square-Root Pipeline Design and Frequency Optimization:*
- Designed a unified 5-cycle, fixed-latency shared pipeline for FP64 DIV and SQRT using Goldschmidt division, reciprocal-square-root Newton iteration, 57-bit Q2.55 fixed-point arithmetic, and LUT-based initial approximations; supports one new instruction per cycle.
- Removed redundant clock-gating and operand-isolation logic based on DC power reports to reduce power consumption.
- Formally verified key functional and timing properties over bounded numeric ranges using VC Formal.
- Achieved timing closure at 2.4 GHz and 2.6 GHz under 5 nm, 0.75 V, 85°C conditions, with no setup violations; results are bit-accurate against the reference model and power increased only 20% versus the prior iterative operator.

*NoC Architecture and Cycle-Accurate Performance Modeling:*
- Evaluated candidate topologies and DDR placements; defined a 2D-mesh NoC with deterministic request/response routing while reusing proven architectural components to reduce verification risk.
- Defined segmented responses, bounded outstanding transactions, FIFO back-pressure, and response-reassembly mechanisms to improve response-path bandwidth utilization.
- Built a parameterized cycle-accurate model covering link pipeline depth, FIFO depth, DDR service latency, and uniform/hotspot/burst traffic to quantify end-to-end latency, hot links, and buffer pressure.

## Project Experience

**Transformer Attention Accelerator SoC Subsystem Design** · *Oct 2025 – Jan 2026*

*Objective:* Build a software-programmable dual-clock Attention SoC accelerator subsystem for Transformer inference, covering CPU configuration, DMA transfers, clock-domain crossing, result write-back, and interrupt notification.

*Key Contributions:*
- Integrated a 500 MHz bus domain with a 1.25 GHz compute domain: AHB-Lite for register configuration and interrupts, 128-bit AXI4-MM DMA for Q/K/V and result transfers, and asynchronous FIFOs for clock-domain crossing.
- Reused an 8 × 8 FP16 systolic array for QK^T and PV; added 8-way parallel Softmax plus score/probability queues so matrix compute, Softmax, and accumulation advance concurrently.
- Reduced dual-clock CDC Error/Fatal findings from 65 to 0 using VC Static.
- Established Python reference-model, VCS regression, SVA, and functional-coverage verification flows.

*Results:*
- Reduced compute cycles from 342,228 to 79,489 (-76.8%) and end-to-end task cycles from 350,429 to 105,112 (-70.0%) for N=64, d=32 attention.
- Achieved 98.48% functional coverage, 0 SVA failures, and 0 numerical mismatches across four final regressions.
- Completed pre-layout STA for four critical modules using Yosys, ASAP7 RVT TT libraries, and OpenSTA; WNS/TNS = 0 at 1.25 GHz with 50 ps clock uncertainty.

## Skills

- **HDL/Programming:** Verilog, SystemVerilog, C++, Python
- **EDA:** VCS, Verdi, DC, VC Static, Vivado, ModelSim, Cocotb
- **English:** IELTS 6.5
