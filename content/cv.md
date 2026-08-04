## Education

**The University of Hong Kong**, MSc in Electrical and Computer Engineering (ECE), *Sep 2025 – Present*
- Key courses: Integrated Circuits, Analog Chip & Memory Design, AI and Edge Processors, Data Compression

**Beijing Jiaotong University**, BEng in Communication Engineering, *Sep 2021 – Jun 2025*
- Key courses: Digital Circuits, Analog Circuits, Circuit Analysis, Digital Signal Processing, Microcomputer Principles & Interfaces

## Research Output

**Low-SNR Modulation Recognition Method Based on Time-Frequency Analysis and SVM**
IEEE Conference on EEBDA · First Author · Mar 2022
- Proposed a modulation recognition method combining time-frequency analysis with an SVM classifier, using time-domain, frequency-domain, and wavelet energy entropy features to identify FSK, FM, and AM signal types.
- Achieved 95% average recognition rate at 15 dB SNR and 98.6% at 30 dB SNR. The method offers low complexity and outperforms decision-tree approaches, making it suitable for engineering applications.

## Internship Experience

**Bitmain** — Digital Design & Verification Engineer · Shanghai · *Jun 2026 – Present*

*[Background]* Optimized the FP64 division and square-root execution unit for a custom RandomX accelerator chip.

*[Function]* Redesigned the FP64 DIV/SQRT datapath using Goldschmidt division and Newton-Raphson reciprocal square root; unified both into a shared C0+5 fixed-latency pipeline with II=1. Implemented a 57-bit Q2.55 fixed-point datapath, three high-precision LUTs, candidate multiply-back verification, and four IEEE rounding modes.

*[Realization]* Developed 9 RTL modules and automated VCS/DC/STA verification flows. Reduced SQRT latency from 13 to 5 cycles and DIV latency from 9 to 5 cycles; achieved zero setup violations at 2.4 GHz (5 nm, 0.75 V, 85°C) with only 8.1% power increase.

**Techhill Technology** — FPGA/ASIC & Circuit Design Engineer · Hong Kong · *Jan 2026 – Apr 2026*

*[Background]* 8-channel mmWave radar high-speed data acquisition on Zynq UltraScale+ (XCZU19EG) and FFT-based environmental noise-cancelling headphones.

*[Function]* Designed hierarchical MIPI CSI-2 Rx + AXI VDMA architecture; hand-wrote a 512-point radix-2 fully pipelined FFT/IFFT engine; built a frequency-domain spectral subtraction engine with Ping-Pong Buffers and overlap-add framing.

*[Realization]* Reduced DSP consumption by 25%; resolved 20+ bank voltage and CDC issues (0 bugs); improved concurrent throughput by 40%.

**Qianxin Technology (千芯科技)** — FPGA AI Acceleration Assistant Engineer · Shenzhen · *Oct 2025 – Jan 2026*

*[Background]* TensorCore for non-standard mixed-format data conversion and high-precision MAC operations, with co-simulation and FPGA deployment.

*[Function]* Developed fp4/fp16-to-fp9 RTL (~800–1,200 lines Verilog); built SystemVerilog testbench with reusable AXI Valid/Ready components (~30 boundary test cases); optimized PCIe/XDMA and POCL for GEMM and KMeans deployment.

*[Realization]* Fixed 15 timing/precision issues; 100% tensor pipeline test coverage with 0 bugs; module reusable across 6+ AI operator accelerators without modification.

## Project Experience

**Runtime Dual-Mode FPGA Architecture for Compressed-Domain Spike Sorting (PCD-PSS)**
Master's Thesis (In Progress) · The University of Hong Kong · *Oct 2025 – Present*

*[Background]* Algorithm-to-FPGA spike-sorting system that classifies aligned neural waveforms directly in the compressed domain with runtime M1/M5 mode selection.

*[Function]* Implemented sparse ternary projection, measurement-domain linear classification, and a runtime-switchable M1/M5 RTL accelerator with AXI4-Lite control on XC7Z015.

*[Realization]* M1: 0.9571 macro-F1 with 8.67 avg measurements; M5: 0.9792 macro-F1 with 16 measurements. Board-validated at 100 MHz with bit-exact integer reference (6,694 LUTs, 9,747 FFs, 1 DSP).

**FPGA Prototype of a ReRAM-Based Spiking Neural Network**
Independent FPGA Project · *Jun 2026 – Jul 2026*

*[Background]* Zynq-based prototype with event-driven CS-LIF front end, signed IF classification, and digital ReRAM readout stub with non-ideality injection.

*[Function]* Implemented three-stage fixed-point CS-LIF pipeline, signed IF MAC, AXI4-Lite interface, and WL/BL/ADC/DONE readout-control sequence in Verilog.

*[Realization]* Completed XC7Z015 board bring-up with event-level CS-LIF checks, IF/ReRAM-stub numerical equivalence, and full regression (digital ReRAM stub; no physical device).

## Skills

- **Languages:** English — IELTS 6.5
- **EDA & Simulation Tools:** VCS, Verdi, Design Compiler (DC), Vivado, ModelSim, Cocotb, Multisim
- **Hardware Description:** Verilog, SystemVerilog
- **Programming:** Python
