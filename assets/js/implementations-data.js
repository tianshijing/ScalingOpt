const implementations = [
    {
        category: "Transformers",
        items: [
            { name: "JAX implementation", url: "https://nn.labml.ai/transformers/jx.html" },
            { name: "Multi-headed attention", url: "https://nn.labml.ai/transformers/mha.html" },
            { name: "Triton Flash Attention", url: "https://nn.labml.ai/transformers/flash_attention.html" },
            { name: "Transformer building blocks", url: "https://nn.labml.ai/transformers/models.html" },
            { name: "Transformer XL", url: "https://nn.labml.ai/transformers/xl/index.html" },
            { name: "Relative multi-headed attention", url: "https://nn.labml.ai/transformers/xl/relative_mha.html" },
            { name: "Rotary Positional Embeddings (RoPE)", url: "https://nn.labml.ai/transformers/rope/index.html" },
            { name: "Attention with Linear Biases (ALiBi)", url: "https://nn.labml.ai/transformers/alibi/index.html" },
            { name: "RETRO", url: "https://nn.labml.ai/transformers/retro/index.html" },
            { name: "Compressive Transformer", url: "https://nn.labml.ai/transformers/compressive/index.html" },
            { name: "GPT Architecture", url: "https://nn.labml.ai/transformers/gpt/index.html" },
            { name: "GLU Variants", url: "https://nn.labml.ai/transformers/glu_variants/simple.html" },
            { name: "kNN-LM: Generalization through Memorization", url: "https://nn.labml.ai/transformers/knn/index.html" },
            { name: "Feedback Transformer", url: "https://nn.labml.ai/transformers/feedback/index.html" },
            { name: "Switch Transformer", url: "https://nn.labml.ai/transformers/switch/index.html" },
            { name: "Fast Weights Transformer", url: "https://nn.labml.ai/transformers/fast_weights/index.html" },
            { name: "FNet", url: "https://nn.labml.ai/transformers/fnet/index.html" },
            { name: "Attention Free Transformer", url: "https://nn.labml.ai/transformers/aft/index.html" },
            { name: "Masked Language Model", url: "https://nn.labml.ai/transformers/mlm/index.html" },
            { name: "MLP-Mixer: An all-MLP Architecture for Vision", url: "https://nn.labml.ai/transformers/mlp_mixer/index.html" },
            { name: "Pay Attention to MLPs (gMLP)", url: "https://nn.labml.ai/transformers/g_mlp/index.html" },
            { name: "Vision Transformer (ViT)", url: "https://nn.labml.ai/transformers/vit/index.html" },
            { name: "Primer EZ", url: "https://nn.labml.ai/transformers/primer_ez/index.html" },
            { name: "Hourglass", url: "https://nn.labml.ai/transformers/hourglass/index.html" }
        ]
    },
    {
        category: "Low-Rank Adaptation (LoRA)",
        items: [
            { name: "Low-Rank Adaptation (LoRA)", url: "https://nn.labml.ai/lora/index.html" }
        ]
    },
    {
        category: "Eleuther GPT-NeoX",
        items: [
            { name: "Generate on a 48GB GPU", url: "https://nn.labml.ai/neox/samples/generate.html" },
            { name: "Finetune on two 48GB GPUs", url: "https://nn.labml.ai/neox/samples/finetune.html" },
            { name: "LLM.int8()", url: "https://nn.labml.ai/neox/utils/llm_int8.html" }
        ]
    },
    {
        category: "Diffusion models",
        items: [
            { name: "Denoising Diffusion Probabilistic Models (DDPM)", url: "https://nn.labml.ai/diffusion/ddpm/index.html" },
            { name: "Denoising Diffusion Implicit Models (DDIM)", url: "https://nn.labml.ai/diffusion/ddim/index.html" },
            { name: "Latent Diffusion Models", url: "https://nn.labml.ai/diffusion/stable_diffusion/latent_diffusion.html" },
            { name: "Stable Diffusion", url: "https://nn.labml.ai/diffusion/stable_diffusion/index.html" }
        ]
    },
    {
        category: "Generative Adversarial Networks",
        items: [
            { name: "Original GAN", url: "https://nn.labml.ai/gan/original/index.html" },
            { name: "GAN with deep convolutional network", url: "https://nn.labml.ai/gan/dcgan/index.html" },
            { name: "Cycle GAN", url: "https://nn.labml.ai/gan/cycle_gan/index.html" },
            { name: "Wasserstein GAN", url: "https://nn.labml.ai/gan/wasserstein/index.html" },
            { name: "Wasserstein GAN with Gradient Penalty", url: "https://nn.labml.ai/gan/wasserstein/gradient_penalty/index.html" },
            { name: "StyleGAN 2", url: "https://nn.labml.ai/gan/stylegan/index.html" }
        ]
    },
    {
        category: "Recurrent Highway Networks",
        items: [
            { name: "Recurrent Highway Networks", url: "https://nn.labml.ai/recurrent_highway_networks/index.html" }
        ]
    },
    {
        category: "LSTM",
        items: [
            { name: "LSTM", url: "https://nn.labml.ai/lstm/index.html" }
        ]
    },
    {
        category: "HyperNetworks - HyperLSTM",
        items: [
            { name: "HyperLSTM", url: "https://nn.labml.ai/hypernetworks/hyper_lstm/index.html" }
        ]
    },
    {
        category: "ResNet",
        items: [
            { name: "ResNet", url: "https://nn.labml.ai/resnet/index.html" }
        ]
    },
    {
        category: "ConvMixer",
        items: [
            { name: "ConvMixer", url: "https://nn.labml.ai/conv_mixer/index.html" }
        ]
    },
    {
        category: "Capsule Networks",
        items: [
            { name: "Capsule Networks", url: "https://nn.labml.ai/capsule_networks/index.html" }
        ]
    },
    {
        category: "U-Net",
        items: [
            { name: "U-Net", url: "https://nn.labml.ai/unet/index.html" }
        ]
    },
    {
        category: "Sketch RNN",
        items: [
            { name: "Sketch RNN", url: "https://nn.labml.ai/sketch_rnn/index.html" }
        ]
    },
    {
        category: "Graph Neural Networks",
        items: [
            { name: "Graph Attention Networks (GAT)", url: "https://nn.labml.ai/graphs/gat/index.html" },
            { name: "Graph Attention Networks v2 (GATv2)", url: "https://nn.labml.ai/graphs/gatv2/index.html" }
        ]
    },
    {
        category: "Reinforcement Learning",
        items: [
            { name: "Proximal Policy Optimization with Generalized Advantage Estimation", url: "https://nn.labml.ai/rl/ppo/index.html" },
            { name: "Deep Q Networks with with Dueling Network, Prioritized Replay and Double Q Network.", url: "https://nn.labml.ai/rl/dqn/index.html" }
        ]
    },
    {
        category: "Counterfactual Regret Minimization (CFR)",
        items: [
            { name: "Solving games with incomplete information such as poker with CFR.", url: "https://nn.labml.ai/cfr/index.html" },
            { name: "Kuhn Poker", url: "https://nn.labml.ai/cfr/kuhn/index.html" }
        ]
    },
    {
        category: "Optimizers",
        items: [
            { name: "Adam", url: "https://nn.labml.ai/optimizers/adam.html" },
            { name: "AMSGrad", url: "https://nn.labml.ai/optimizers/amsgrad.html" },
            { name: "Adam Optimizer with warmup", url: "https://nn.labml.ai/optimizers/adam_warmup.html" },
            { name: "Noam Optimizer", url: "https://nn.labml.ai/optimizers/noam.html" },
            { name: "Rectified Adam Optimizer", url: "https://nn.labml.ai/optimizers/radam.html" },
            { name: "AdaBelief Optimizer", url: "https://nn.labml.ai/optimizers/ada_belief.html" },
            { name: "Sophia-G Optimizer", url: "https://nn.labml.ai/optimizers/sophia.html" }
        ]
    },
    {
        category: "Normalization Layers",
        items: [
            { name: "Batch Normalization", url: "https://nn.labml.ai/normalization/batch_norm/index.html" },
            { name: "Layer Normalization", url: "https://nn.labml.ai/normalization/layer_norm/index.html" },
            { name: "Instance Normalization", url: "https://nn.labml.ai/normalization/instance_norm/index.html" },
            { name: "Group Normalization", url: "https://nn.labml.ai/normalization/group_norm/index.html" },
            { name: "Weight Standardization", url: "https://nn.labml.ai/normalization/weight_standardization/index.html" },
            { name: "Batch-Channel Normalization", url: "https://nn.labml.ai/normalization/batch_channel_norm/index.html" },
            { name: "DeepNorm", url: "https://nn.labml.ai/normalization/deep_norm/index.html" }
        ]
    },
    {
        category: "Distillation",
        items: [
            { name: "Distillation", url: "https://nn.labml.ai/distillation/index.html" }
        ]
    },
    {
        category: "Adaptive Computation",
        items: [
            { name: "PonderNet", url: "https://nn.labml.ai/adaptive_computation/ponder_net/index.html" }
        ]
    },
    {
        category: "Uncertainty",
        items: [
            { name: "Evidential Deep Learning to Quantify Classification Uncertainty", url: "https://nn.labml.ai/uncertainty/evidence/index.html" }
        ]
    },
    {
        category: "Activations",
        items: [
            { name: "Fuzzy Tiling Activations", url: "https://nn.labml.ai/activations/fta/index.html" }
        ]
    },
    {
        category: "Language Model Sampling Techniques",
        items: [
            { name: "Greedy Sampling", url: "https://nn.labml.ai/sampling/greedy.html" },
            { name: "Temperature Sampling", url: "https://nn.labml.ai/sampling/temperature.html" },
            { name: "Top-k Sampling", url: "https://nn.labml.ai/sampling/top_k.html" },
            { name: "Nucleus Sampling", url: "https://nn.labml.ai/sampling/nucleus.html" }
        ]
    },
    {
        category: "Scalable Training/Inference",
        items: [
            { name: "Zero3 memory optimizations", url: "https://nn.labml.ai/scaling/zero3/index.html" }
        ]
    }
];
