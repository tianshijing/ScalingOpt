'use client';

import { useState } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Award, 
  Target, 
  Cpu, 
  Brain,
  FileText,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Info
} from 'lucide-react';

export default function BenchmarksPage() {
  const [selectedSuite, setSelectedSuite] = useState('cv');
  const [expandedTable, setExpandedTable] = useState<string | null>(null);

  const toggleTable = (tableId: string) => {
    setExpandedTable(expandedTable === tableId ? null : tableId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            <BarChart3 className="w-4 h-4 mr-2" />
            Research-Based Benchmarks
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Optimizer <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Benchmarks</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Comprehensive benchmark results from our research paper on backbone-optimizer coupling bias in visual representation learning.
          </p>
          
          {/* Citation Notice */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-6 max-w-4xl mx-auto mb-8">
            <div className="flex items-start space-x-3">
              <Info className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
              <div className="text-left">
                <h3 className="font-semibold text-amber-800 mb-2">Research Citation Required</h3>
                <p className="text-amber-700 mb-3">
                  All benchmark results are derived from our research paper. Please cite our work when using these results:
                </p>
                <div className="bg-white rounded-lg p-4 border border-amber-200">
                  <p className="text-sm text-gray-700 font-mono">
                    "Unveiling the Backbone-Optimizer Coupling Bias in Visual Representation Learning"
                  </p>
                  <a 
                    href="https://arxiv.org/abs/2410.06373v1" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm mt-2"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    arXiv:2410.06373v1
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benchmark Suite Selector */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 md:mb-0">Benchmark Suites</h2>
            <div className="flex space-x-2">
              <button
                onClick={() => setSelectedSuite('cv')}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  selectedSuite === 'cv'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Target className="w-5 h-5 inline mr-2" />
                CV Benchmark
              </button>
              <button
                onClick={() => setSelectedSuite('llm')}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  selectedSuite === 'llm'
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Brain className="w-5 h-5 inline mr-2" />
                LLM Benchmark
              </button>
            </div>
          </div>
        </div>

        {/* CV Benchmark Content */}
        {selectedSuite === 'cv' && (
          <div className="space-y-8">
            
            {/* CIFAR-100 Benchmark */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div 
                className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4 cursor-pointer"
                onClick={() => toggleTable('cifar100')}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Award className="w-6 h-6 text-white mr-3" />
                    <div>
                      <h3 className="text-xl font-semibold text-white">CIFAR-100 Benchmark</h3>
                      <p className="text-blue-100 text-sm">Top-1 accuracy (%) across 20 backbone architectures with 20 optimizers</p>
                    </div>
                  </div>
                  {expandedTable === 'cifar100' ? 
                    <ChevronUp className="w-6 h-6 text-white" /> : 
                    <ChevronDown className="w-6 h-6 text-white" />
                  }
                </div>
              </div>
              
              {expandedTable === 'cifar100' && (
                <div className="p-6">
                  <div className="mb-4 text-sm text-gray-600">
                    <p><strong>Setup:</strong> Representative vision backbones with 20 mainstream optimizers. Blue highlights denote top-4 results.</p>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs border border-gray-200">
                      <thead>
                        <tr className="bg-gray-50 border-b">
                          <th className="text-left p-2 font-semibold text-black border-r">Optimizer</th>
                          <th className="text-center p-2 font-semibold text-black border-r">AlexNet</th>
                          <th className="text-center p-2 font-semibold text-black border-r">VGG-13</th>
                          <th className="text-center p-2 font-semibold text-black border-r">R-50</th>
                          <th className="text-center p-2 font-semibold text-black border-r">DN-121</th>
                          <th className="text-center p-2 font-semibold text-black border-r">MobV2</th>
                          <th className="text-center p-2 font-semibold text-black border-r">Eff-B0</th>
                          <th className="text-center p-2 font-semibold text-black border-r">RVGG-A1</th>
                          <th className="text-center p-2 font-semibold text-black border-r">DeiT-S</th>
                          <th className="text-center p-2 font-semibold text-black border-r">MLP-S</th>
                          <th className="text-center p-2 font-semibold text-black border-r">Swin-T</th>
                          <th className="text-center p-2 font-semibold text-black border-r">CNX-T</th>
                          <th className="text-center p-2 font-semibold text-black border-r">CNXV2-T</th>
                          <th className="text-center p-2 font-semibold text-black border-r">Moga-S</th>
                          <th className="text-center p-2 font-semibold text-black border-r">URLK-T</th>
                          <th className="text-center p-2 font-semibold text-black border-r">TNX-T</th>
                          <th className="text-center p-2 font-semibold text-black border-r">IF-12</th>
                          <th className="text-center p-2 font-semibold text-black border-r">PFV2-12</th>
                          <th className="text-center p-2 font-semibold text-black border-r">CF-12</th>
                          <th className="text-center p-2 font-semibold text-black border-r">AF-12</th>
                          <th className="text-center p-2 font-semibold text-black">CAF-12</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b bg-orange-50">
                          <td className="p-2 font-medium text-black border-r">SGD-M</td>
                          <td className="p-2 text-center text-blue-600 font-semibold border-r">66.76</td>
                          <td className="p-2 text-center text-blue-600 font-semibold border-r">77.08</td>
                          <td className="p-2 text-center text-blue-600 font-semibold border-r">78.76</td>
                          <td className="p-2 text-center text-black border-r">78.01</td>
                          <td className="p-2 text-center text-black border-r">77.16</td>
                          <td className="p-2 text-center text-blue-600 font-semibold border-r">79.41</td>
                          <td className="p-2 text-center text-black border-r">75.85</td>
                          <td className="p-2 text-center text-red-600 border-r">63.20</td>
                          <td className="p-2 text-center text-black border-r">72.64</td>
                          <td className="p-2 text-center text-black border-r">78.95</td>
                          <td className="p-2 text-center text-red-600 border-r">60.09</td>
                          <td className="p-2 text-center text-black border-r">82.25</td>
                          <td className="p-2 text-center text-red-600 border-r">75.93</td>
                          <td className="p-2 text-center text-black border-r">82.75</td>
                          <td className="p-2 text-center text-black border-r">86.21</td>
                          <td className="p-2 text-center text-black border-r">77.40</td>
                          <td className="p-2 text-center text-black border-r">77.70</td>
                          <td className="p-2 text-center text-black border-r">83.46</td>
                          <td className="p-2 text-center text-black border-r">83.02</td>
                          <td className="p-2 text-center text-black">81.21</td>
                        </tr>
                        <tr className="border-b bg-orange-50">
                          <td className="p-2 font-medium text-black border-r">SGDP</td>
                          <td className="p-2 text-center text-black border-r">66.54</td>
                          <td className="p-2 text-center text-purple-600 font-semibold border-r">77.56</td>
                          <td className="p-2 text-center text-blue-600 font-semibold border-r">79.25</td>
                          <td className="p-2 text-center text-blue-600 font-semibold border-r">78.93</td>
                          <td className="p-2 text-center text-black border-r">77.32</td>
                          <td className="p-2 text-center text-blue-600 font-semibold border-r">79.55</td>
                          <td className="p-2 text-center text-black border-r">75.26</td>
                          <td className="p-2 text-center text-red-600 border-r">63.53</td>
                          <td className="p-2 text-center text-red-600 border-r">69.24</td>
                          <td className="p-2 text-center text-black border-r">80.56</td>
                          <td className="p-2 text-center text-red-600 border-r">61.25</td>
                          <td className="p-2 text-center text-black border-r">82.43</td>
                          <td className="p-2 text-center text-red-600 border-r">80.86</td>
                          <td className="p-2 text-center text-black border-r">82.18</td>
                          <td className="p-2 text-center text-black border-r">86.12</td>
                          <td className="p-2 text-center text-black border-r">77.55</td>
                          <td className="p-2 text-center text-black border-r">77.53</td>
                          <td className="p-2 text-center text-black border-r">83.54</td>
                          <td className="p-2 text-center text-black border-r">82.88</td>
                          <td className="p-2 text-center text-black">81.56</td>
                        </tr>
                        <tr className="border-b bg-orange-50">
                          <td className="p-2 font-medium text-black border-r">LION</td>
                          <td className="p-2 text-center text-black border-r">62.11</td>
                          <td className="p-2 text-center text-black border-r">73.87</td>
                          <td className="p-2 text-center text-black border-r">75.28</td>
                          <td className="p-2 text-center text-black border-r">75.42</td>
                          <td className="p-2 text-center text-black border-r">74.62</td>
                          <td className="p-2 text-center text-black border-r">76.97</td>
                          <td className="p-2 text-center text-black border-r">73.55</td>
                          <td className="p-2 text-center text-blue-600 font-semibold border-r">74.57</td>
                          <td className="p-2 text-center text-blue-600 font-semibold border-r">74.19</td>
                          <td className="p-2 text-center text-blue-600 font-semibold border-r">81.84</td>
                          <td className="p-2 text-center text-black border-r">82.29</td>
                          <td className="p-2 text-center text-black border-r">82.53</td>
                          <td className="p-2 text-center text-black border-r">85.03</td>
                          <td className="p-2 text-center text-black border-r">83.43</td>
                          <td className="p-2 text-center text-black border-r">86.96</td>
                          <td className="p-2 text-center text-black border-r">78.65</td>
                          <td className="p-2 text-center text-black border-r">79.66</td>
                          <td className="p-2 text-center text-black border-r">84.62</td>
                          <td className="p-2 text-center text-black border-r">82.41</td>
                          <td className="p-2 text-center text-red-600">79.59</td>
                        </tr>
                        <tr className="border-b bg-blue-50">
                          <td className="p-2 font-medium text-black border-r">Adam</td>
                          <td className="p-2 text-center text-black border-r">65.29</td>
                          <td className="p-2 text-center text-black border-r">73.41</td>
                          <td className="p-2 text-center text-black border-r">74.55</td>
                          <td className="p-2 text-center text-black border-r">76.78</td>
                          <td className="p-2 text-center text-black border-r">74.56</td>
                          <td className="p-2 text-center text-black border-r">76.48</td>
                          <td className="p-2 text-center text-black border-r">75.06</td>
                          <td className="p-2 text-center text-black border-r">71.04</td>
                          <td className="p-2 text-center text-black border-r">72.84</td>
                          <td className="p-2 text-center text-black border-r">80.71</td>
                          <td className="p-2 text-center text-black border-r">82.03</td>
                          <td className="p-2 text-center text-black border-r">82.66</td>
                          <td className="p-2 text-center text-black border-r">84.92</td>
                          <td className="p-2 text-center text-black border-r">84.73</td>
                          <td className="p-2 text-center text-black border-r">86.23</td>
                          <td className="p-2 text-center text-black border-r">78.39</td>
                          <td className="p-2 text-center text-black border-r">79.18</td>
                          <td className="p-2 text-center text-black border-r">84.81</td>
                          <td className="p-2 text-center text-black border-r">81.54</td>
                          <td className="p-2 text-center text-black">82.18</td>
                        </tr>
                        <tr className="border-b bg-blue-50">
                          <td className="p-2 font-medium text-black border-r">Adamax</td>
                          <td className="p-2 text-center text-purple-600 font-semibold border-r">67.30</td>
                          <td className="p-2 text-center text-black border-r">73.80</td>
                          <td className="p-2 text-center text-black border-r">75.21</td>
                          <td className="p-2 text-center text-red-600 border-r">73.52</td>
                          <td className="p-2 text-center text-black border-r">74.60</td>
                          <td className="p-2 text-center text-black border-r">78.37</td>
                          <td className="p-2 text-center text-black border-r">74.33</td>
                          <td className="p-2 text-center text-black border-r">73.31</td>
                          <td className="p-2 text-center text-black border-r">73.07</td>
                          <td className="p-2 text-center text-black border-r">81.28</td>
                          <td className="p-2 text-center text-black border-r">80.25</td>
                          <td className="p-2 text-center text-black border-r">81.90</td>
                          <td className="p-2 text-center text-black border-r">84.51</td>
                          <td className="p-2 text-center text-black border-r">83.81</td>
                          <td className="p-2 text-center text-black border-r">86.34</td>
                          <td className="p-2 text-center text-black border-r">78.02</td>
                          <td className="p-2 text-center text-black border-r">79.55</td>
                          <td className="p-2 text-center text-black border-r">84.31</td>
                          <td className="p-2 text-center text-black border-r">81.83</td>
                          <td className="p-2 text-center text-black">82.50</td>
                        </tr>
                        <tr className="border-b bg-blue-50">
                          <td className="p-2 font-medium text-black border-r">NAdam</td>
                          <td className="p-2 text-center text-red-600 border-r">60.49</td>
                          <td className="p-2 text-center text-black border-r">73.96</td>
                          <td className="p-2 text-center text-black border-r">74.82</td>
                          <td className="p-2 text-center text-black border-r">76.10</td>
                          <td className="p-2 text-center text-black border-r">75.08</td>
                          <td className="p-2 text-center text-black border-r">77.06</td>
                          <td className="p-2 text-center text-black border-r">74.86</td>
                          <td className="p-2 text-center text-black border-r">72.75</td>
                          <td className="p-2 text-center text-black border-r">73.77</td>
                          <td className="p-2 text-center text-black border-r">81.80</td>
                          <td className="p-2 text-center text-black border-r">82.26</td>
                          <td className="p-2 text-center text-black border-r">82.72</td>
                          <td className="p-2 text-center text-black border-r">85.23</td>
                          <td className="p-2 text-center text-black border-r">82.07</td>
                          <td className="p-2 text-center text-black border-r">86.44</td>
                          <td className="p-2 text-center text-black border-r">78.37</td>
                          <td className="p-2 text-center text-blue-600 font-semibold border-r">80.32</td>
                          <td className="p-2 text-center text-black border-r">84.81</td>
                          <td className="p-2 text-center text-black border-r">81.82</td>
                          <td className="p-2 text-center text-black">82.83</td>
                        </tr>
                        <tr className="border-b bg-blue-50">
                          <td className="p-2 font-medium text-black border-r">AdamW</td>
                          <td className="p-2 text-center text-black border-r">62.71</td>
                          <td className="p-2 text-center text-black border-r">73.90</td>
                          <td className="p-2 text-center text-black border-r">75.56</td>
                          <td className="p-2 text-center text-black border-r">78.14</td>
                          <td className="p-2 text-center text-black border-r">76.88</td>
                          <td className="p-2 text-center text-black border-r">78.77</td>
                          <td className="p-2 text-center text-black border-r">75.35</td>
                          <td className="p-2 text-center text-black border-r">72.15</td>
                          <td className="p-2 text-center text-black border-r">73.59</td>
                          <td className="p-2 text-center text-black border-r">81.30</td>
                          <td className="p-2 text-center text-black border-r">83.52</td>
                          <td className="p-2 text-center text-black border-r">83.59</td>
                          <td className="p-2 text-center text-blue-600 font-semibold border-r">86.19</td>
                          <td className="p-2 text-center text-blue-600 font-semibold border-r">86.30</td>
                          <td className="p-2 text-center text-blue-600 font-semibold border-r">87.51</td>
                          <td className="p-2 text-center text-blue-600 font-semibold border-r">79.39</td>
                          <td className="p-2 text-center text-blue-600 font-semibold border-r">80.55</td>
                          <td className="p-2 text-center text-blue-600 font-semibold border-r">85.46</td>
                          <td className="p-2 text-center text-black border-r">82.24</td>
                          <td className="p-2 text-center text-blue-600 font-semibold">83.60</td>
                        </tr>
                        <tr className="border-b bg-blue-50">
                          <td className="p-2 font-medium text-black border-r">LAMB</td>
                          <td className="p-2 text-center text-blue-600 font-semibold border-r">66.90</td>
                          <td className="p-2 text-center text-black border-r">75.55</td>
                          <td className="p-2 text-center text-black border-r">77.19</td>
                          <td className="p-2 text-center text-black border-r">78.81</td>
                          <td className="p-2 text-center text-blue-600 font-semibold border-r">77.59</td>
                          <td className="p-2 text-center text-black border-r">78.77</td>
                          <td className="p-2 text-center text-blue-600 font-semibold border-r">77.04</td>
                          <td className="p-2 text-center text-blue-600 font-semibold border-r">75.39</td>
                          <td className="p-2 text-center text-purple-600 font-semibold border-r">74.98</td>
                          <td className="p-2 text-center text-purple-600 font-semibold border-r">83.47</td>
                          <td className="p-2 text-center text-blue-600 font-semibold border-r">84.13</td>
                          <td className="p-2 text-center text-purple-600 font-semibold border-r">84.93</td>
                          <td className="p-2 text-center text-blue-600 font-semibold border-r">86.04</td>
                          <td className="p-2 text-center text-black border-r">84.99</td>
                          <td className="p-2 text-center text-blue-600 font-semibold border-r">87.37</td>
                          <td className="p-2 text-center text-blue-600 font-semibold border-r">80.21</td>
                          <td className="p-2 text-center text-black border-r">80.01</td>
                          <td className="p-2 text-center text-blue-600 font-semibold border-r">85.40</td>
                          <td className="p-2 text-center text-blue-600 font-semibold border-r">83.16</td>
                          <td className="p-2 text-center text-blue-600 font-semibold">83.74</td>
                        </tr>
                        <tr className="border-b bg-blue-50">
                          <td className="p-2 font-medium text-black border-r">RAdam</td>
                          <td className="p-2 text-center text-black border-r">61.69</td>
                          <td className="p-2 text-center text-black border-r">74.64</td>
                          <td className="p-2 text-center text-black border-r">75.19</td>
                          <td className="p-2 text-center text-black border-r">76.40</td>
                          <td className="p-2 text-center text-black border-r">75.94</td>
                          <td className="p-2 text-center text-black border-r">77.08</td>
                          <td className="p-2 text-center text-black border-r">74.83</td>
                          <td className="p-2 text-center text-black border-r">72.41</td>
                          <td className="p-2 text-center text-black border-r">72.11</td>
                          <td className="p-2 text-center text-black border-r">79.84</td>
                          <td className="p-2 text-center text-black border-r">82.18</td>
                          <td className="p-2 text-center text-black border-r">82.69</td>
                          <td className="p-2 text-center text-black border-r">84.95</td>
                          <td className="p-2 text-center text-black border-r">84.26</td>
                          <td className="p-2 text-center text-black border-r">86.49</td>
                          <td className="p-2 text-center text-black border-r">78.46</td>
                          <td className="p-2 text-center text-black border-r">79.71</td>
                          <td className="p-2 text-center text-black border-r">84.93</td>
                          <td className="p-2 text-center text-black border-r">81.44</td>
                          <td className="p-2 text-center text-black">82.35</td>
                        </tr>
                        <tr className="border-b bg-blue-50">
                          <td className="p-2 font-medium text-black border-r">AdamP</td>
                          <td className="p-2 text-center text-red-600 border-r">60.27</td>
                          <td className="p-2 text-center text-black border-r">75.56</td>
                          <td className="p-2 text-center text-black border-r">78.17</td>
                          <td className="p-2 text-center text-blue-600 font-semibold border-r">78.89</td>
                          <td className="p-2 text-center text-blue-600 font-semibold border-r">77.79</td>
                          <td className="p-2 text-center text-black border-r">78.65</td>
                          <td className="p-2 text-center text-purple-600 font-semibold border-r">77.67</td>
                          <td className="p-2 text-center text-black border-r">71.55</td>
                          <td className="p-2 text-center text-black border-r">73.66</td>
                          <td className="p-2 text-center text-black border-r">80.91</td>
                          <td className="p-2 text-center text-blue-600 font-semibold border-r">84.47</td>
                          <td className="p-2 text-center text-blue-600 font-semibold border-r">84.40</td>
                          <td className="p-2 text-center text-blue-600 font-semibold border-r">86.45</td>
                          <td className="p-2 text-center text-blue-600 font-semibold border-r">86.19</td>
                          <td className="p-2 text-center text-blue-600 font-semibold border-r">87.16</td>
                          <td className="p-2 text-center text-blue-600 font-semibold border-r">79.20</td>
                          <td className="p-2 text-center text-blue-600 font-semibold border-r">81.70</td>
                          <td className="p-2 text-center text-blue-600 font-semibold border-r">85.15</td>
                          <td className="p-2 text-center text-black border-r">82.12</td>
                          <td className="p-2 text-center text-blue-600 font-semibold">83.40</td>
                        </tr>
                        <tr className="border-b bg-blue-50">
                          <td className="p-2 font-medium text-black border-r">Adan</td>
                          <td className="p-2 text-center text-black border-r">63.98</td>
                          <td className="p-2 text-center text-black border-r">74.90</td>
                          <td className="p-2 text-center text-black border-r">77.08</td>
                          <td className="p-2 text-center text-purple-600 font-semibold border-r">79.33</td>
                          <td className="p-2 text-center text-blue-600 font-semibold border-r">77.73</td>
                          <td className="p-2 text-center text-black border-r">78.43</td>
                          <td className="p-2 text-center text-blue-600 font-semibold border-r">76.99</td>
                          <td className="p-2 text-center text-purple-600 font-semibold border-r">76.33</td>
                          <td className="p-2 text-center text-blue-600 font-semibold border-r">74.94</td>
                          <td className="p-2 text-center text-blue-600 font-semibold border-r">83.35</td>
                          <td className="p-2 text-center text-purple-600 font-semibold border-r">84.65</td>
                          <td className="p-2 text-center text-blue-600 font-semibold border-r">84.77</td>
                          <td className="p-2 text-center text-purple-600 font-semibold border-r">86.46</td>
                          <td className="p-2 text-center text-purple-600 font-semibold border-r">86.75</td>
                          <td className="p-2 text-center text-purple-600 font-semibold border-r">87.47</td>
                          <td className="p-2 text-center text-purple-600 font-semibold border-r">80.59</td>
                          <td className="p-2 text-center text-purple-600 font-semibold border-r">83.23</td>
                          <td className="p-2 text-center text-purple-600 font-semibold border-r">85.58</td>
                          <td className="p-2 text-center text-purple-600 font-semibold border-r">83.51</td>
                          <td className="p-2 text-center text-purple-600 font-semibold">84.89</td>
                        </tr>
                        <tr className="border-b bg-green-50">
                          <td className="p-2 font-medium text-black border-r">AdaBound</td>
                          <td className="p-2 text-center text-black border-r">66.59</td>
                          <td className="p-2 text-center text-blue-600 font-semibold border-r">77.00</td>
                          <td className="p-2 text-center text-black border-r">78.11</td>
                          <td className="p-2 text-center text-black border-r">75.26</td>
                          <td className="p-2 text-center text-purple-600 font-semibold border-r">78.76</td>
                          <td className="p-2 text-center text-purple-600 font-semibold border-r">79.88</td>
                          <td className="p-2 text-center text-black border-r">74.14</td>
                          <td className="p-2 text-center text-red-600 border-r">68.59</td>
                          <td className="p-2 text-center text-red-600 border-r">70.31</td>
                          <td className="p-2 text-center text-black border-r">80.67</td>
                          <td className="p-2 text-center text-red-600 border-r">71.96</td>
                          <td className="p-2 text-center text-black border-r">83.90</td>
                          <td className="p-2 text-center text-red-600 border-r">78.48</td>
                          <td className="p-2 text-center text-black border-r">83.03</td>
                          <td className="p-2 text-center text-black border-r">86.07</td>
                          <td className="p-2 text-center text-black border-r">77.99</td>
                          <td className="p-2 text-center text-black border-r">77.81</td>
                          <td className="p-2 text-center text-black border-r">82.73</td>
                          <td className="p-2 text-center text-blue-600 font-semibold border-r">83.08</td>
                          <td className="p-2 text-center text-black">82.38</td>
                        </tr>
                        <tr className="border-b bg-green-50">
                          <td className="p-2 font-medium text-black border-r">LARS</td>
                          <td className="p-2 text-center text-black border-r">64.35</td>
                          <td className="p-2 text-center text-black border-r">75.71</td>
                          <td className="p-2 text-center text-black border-r">78.25</td>
                          <td className="p-2 text-center text-black border-r">77.25</td>
                          <td className="p-2 text-center text-black border-r">76.23</td>
                          <td className="p-2 text-center text-red-600 border-r">72.43</td>
                          <td className="p-2 text-center text-black border-r">75.50</td>
                          <td className="p-2 text-center text-black border-r">71.36</td>
                          <td className="p-2 text-center text-black border-r">72.64</td>
                          <td className="p-2 text-center text-black border-r">81.29</td>
                          <td className="p-2 text-center text-red-600 border-r">61.40</td>
                          <td className="p-2 text-center text-black border-r">82.22</td>
                          <td className="p-2 text-center text-red-600 border-r">33.26</td>
                          <td className="p-2 text-center text-red-600 border-r">41.03</td>
                          <td className="p-2 text-center text-black border-r">85.16</td>
                          <td className="p-2 text-center text-black border-r">77.66</td>
                          <td className="p-2 text-center text-black border-r">78.78</td>
                          <td className="p-2 text-center text-black border-r">82.98</td>
                          <td className="p-2 text-center text-black border-r">81.00</td>
                          <td className="p-2 text-center text-black">82.05</td>
                        </tr>
                        <tr className="border-b bg-green-50">
                          <td className="p-2 font-medium text-black border-r">AdaFactor</td>
                          <td className="p-2 text-center text-black border-r">63.91</td>
                          <td className="p-2 text-center text-black border-r">74.49</td>
                          <td className="p-2 text-center text-black border-r">75.41</td>
                          <td className="p-2 text-center text-black border-r">77.03</td>
                          <td className="p-2 text-center text-black border-r">75.38</td>
                          <td className="p-2 text-center text-black border-r">77.83</td>
                          <td className="p-2 text-center text-black border-r">75.03</td>
                          <td className="p-2 text-center text-blue-600 font-semibold border-r">74.02</td>
                          <td className="p-2 text-center text-black border-r">71.16</td>
                          <td className="p-2 text-center text-black border-r">80.36</td>
                          <td className="p-2 text-center text-black border-r">82.82</td>
                          <td className="p-2 text-center text-black border-r">83.06</td>
                          <td className="p-2 text-center text-black border-r">85.17</td>
                          <td className="p-2 text-center text-blue-600 font-semibold border-r">85.99</td>
                          <td className="p-2 text-center text-black border-r">86.57</td>
                          <td className="p-2 text-center text-black border-r">78.78</td>
                          <td className="p-2 text-center text-black border-r">78.81</td>
                          <td className="p-2 text-center text-black border-r">84.90</td>
                          <td className="p-2 text-center text-black border-r">81.94</td>
                          <td className="p-2 text-center text-black">82.36</td>
                        </tr>
                        <tr className="border-b bg-green-50">
                          <td className="p-2 font-medium text-black border-r">AdaBelief</td>
                          <td className="p-2 text-center text-black border-r">62.98</td>
                          <td className="p-2 text-center text-black border-r">75.09</td>
                          <td className="p-2 text-center text-purple-600 font-semibold border-r">80.53</td>
                          <td className="p-2 text-center text-blue-600 font-semibold border-r">79.26</td>
                          <td className="p-2 text-center text-black border-r">75.78</td>
                          <td className="p-2 text-center text-black border-r">78.48</td>
                          <td className="p-2 text-center text-blue-600 font-semibold border-r">76.90</td>
                          <td className="p-2 text-center text-black border-r">70.66</td>
                          <td className="p-2 text-center text-black border-r">73.30</td>
                          <td className="p-2 text-center text-black border-r">80.98</td>
                          <td className="p-2 text-center text-black border-r">83.31</td>
                          <td className="p-2 text-center text-blue-600 font-semibold border-r">84.47</td>
                          <td className="p-2 text-center text-black border-r">84.80</td>
                          <td className="p-2 text-center text-black border-r">84.54</td>
                          <td className="p-2 text-center text-black border-r">86.64</td>
                          <td className="p-2 text-center text-black border-r">78.55</td>
                          <td className="p-2 text-center text-blue-600 font-semibold border-r">81.01</td>
                          <td className="p-2 text-center text-black border-r">85.03</td>
                          <td className="p-2 text-center text-blue-600 font-semibold border-r">83.21</td>
                          <td className="p-2 text-center text-blue-600 font-semibold">83.56</td>
                        </tr>
                        <tr className="border-b bg-green-50">
                          <td className="p-2 font-medium text-black border-r">NovoGrad</td>
                          <td className="p-2 text-center text-black border-r">64.24</td>
                          <td className="p-2 text-center text-blue-600 font-semibold border-r">76.09</td>
                          <td className="p-2 text-center text-blue-600 font-semibold border-r">79.36</td>
                          <td className="p-2 text-center text-black border-r">77.25</td>
                          <td className="p-2 text-center text-red-600 border-r">71.26</td>
                          <td className="p-2 text-center text-red-600 border-r">74.23</td>
                          <td className="p-2 text-center text-black border-r">75.16</td>
                          <td className="p-2 text-center text-black border-r">73.13</td>
                          <td className="p-2 text-center text-red-600 border-r">67.03</td>
                          <td className="p-2 text-center text-blue-600 font-semibold border-r">81.82</td>
                          <td className="p-2 text-center text-black border-r">79.99</td>
                          <td className="p-2 text-center text-black border-r">82.01</td>
                          <td className="p-2 text-center text-red-600 border-r">82.96</td>
                          <td className="p-2 text-center text-red-600 border-r">80.77</td>
                          <td className="p-2 text-center text-black border-r">85.85</td>
                          <td className="p-2 text-center text-black border-r">77.16</td>
                          <td className="p-2 text-center text-black border-r">78.92</td>
                          <td className="p-2 text-center text-black border-r">83.51</td>
                          <td className="p-2 text-center text-black border-r">81.28</td>
                          <td className="p-2 text-center text-black">82.98</td>
                        </tr>
                        <tr className="border-b bg-green-50">
                          <td className="p-2 font-medium text-black border-r">Sophia</td>
                          <td className="p-2 text-center text-black border-r">64.30</td>
                          <td className="p-2 text-center text-black border-r">74.18</td>
                          <td className="p-2 text-center text-black border-r">75.19</td>
                          <td className="p-2 text-center text-black border-r">77.91</td>
                          <td className="p-2 text-center text-black border-r">76.60</td>
                          <td className="p-2 text-center text-blue-600 font-semibold border-r">78.95</td>
                          <td className="p-2 text-center text-black border-r">75.85</td>
                          <td className="p-2 text-center text-black border-r">71.47</td>
                          <td className="p-2 text-center text-black border-r">72.74</td>
                          <td className="p-2 text-center text-black border-r">80.61</td>
                          <td className="p-2 text-center text-blue-600 font-semibold border-r">83.76</td>
                          <td className="p-2 text-center text-blue-600 font-semibold border-r">83.94</td>
                          <td className="p-2 text-center text-black border-r">85.39</td>
                          <td className="p-2 text-center text-black border-r">84.20</td>
                          <td className="p-2 text-center text-black border-r">86.60</td>
                          <td className="p-2 text-center text-black border-r">77.67</td>
                          <td className="p-2 text-center text-black border-r">78.90</td>
                          <td className="p-2 text-center text-black border-r">84.58</td>
                          <td className="p-2 text-center text-black border-r">81.67</td>
                          <td className="p-2 text-center text-black">82.96</td>
                        </tr>
                        <tr className="border-b bg-gray-200">
                          <td className="p-2 font-medium text-black border-r">AdaGrad</td>
                          <td className="p-2 text-center text-red-600 border-r">45.79</td>
                          <td className="p-2 text-center text-red-600 border-r">71.29</td>
                          <td className="p-2 text-center text-red-600 border-r">73.30</td>
                          <td className="p-2 text-center text-red-600 border-r">51.70</td>
                          <td className="p-2 text-center text-red-600 border-r">33.87</td>
                          <td className="p-2 text-center text-black border-r">77.93</td>
                          <td className="p-2 text-center text-red-600 border-r">46.06</td>
                          <td className="p-2 text-center text-red-600 border-r">67.24</td>
                          <td className="p-2 text-center text-red-600 border-r">67.50</td>
                          <td className="p-2 text-center text-red-600 border-r">75.83</td>
                          <td className="p-2 text-center text-red-600 border-r">75.63</td>
                          <td className="p-2 text-center text-red-600 border-r">50.34</td>
                          <td className="p-2 text-center text-black border-r">83.03</td>
                          <td className="p-2 text-center text-black border-r">82.57</td>
                          <td className="p-2 text-center text-red-600 border-r">66.83</td>
                          <td className="p-2 text-center text-red-600 border-r">44.34</td>
                          <td className="p-2 text-center text-red-600 border-r">44.40</td>
                          <td className="p-2 text-center text-red-600 border-r">79.67</td>
                          <td className="p-2 text-center text-red-600 border-r">78.71</td>
                          <td className="p-2 text-center text-red-600">38.09</td>
                        </tr>
                        <tr className="border-b bg-gray-200">
                          <td className="p-2 font-medium text-black border-r">AdaDelta</td>
                          <td className="p-2 text-center text-blue-600 font-semibold border-r">66.87</td>
                          <td className="p-2 text-center text-black border-r">74.14</td>
                          <td className="p-2 text-center text-black border-r">75.07</td>
                          <td className="p-2 text-center text-black border-r">76.82</td>
                          <td className="p-2 text-center text-black border-r">75.32</td>
                          <td className="p-2 text-center text-black border-r">77.88</td>
                          <td className="p-2 text-center text-black border-r">74.58</td>
                          <td className="p-2 text-center text-red-600 border-r">65.44</td>
                          <td className="p-2 text-center text-black border-r">71.32</td>
                          <td className="p-2 text-center text-black border-r">80.25</td>
                          <td className="p-2 text-center text-red-600 border-r">74.25</td>
                          <td className="p-2 text-center text-black border-r">82.74</td>
                          <td className="p-2 text-center text-red-600 border-r">81.06</td>
                          <td className="p-2 text-center text-black border-r">84.17</td>
                          <td className="p-2 text-center text-black border-r">85.31</td>
                          <td className="p-2 text-center text-red-600 border-r">75.91</td>
                          <td className="p-2 text-center text-red-600 border-r">76.40</td>
                          <td className="p-2 text-center text-black border-r">84.05</td>
                          <td className="p-2 text-center text-black border-r">82.62</td>
                          <td className="p-2 text-center text-black">82.08</td>
                        </tr>
                        <tr className="border-b bg-gray-200">
                          <td className="p-2 font-medium text-black border-r">RMSProp</td>
                          <td className="p-2 text-center text-red-600 border-r">59.33</td>
                          <td className="p-2 text-center text-black border-r">73.30</td>
                          <td className="p-2 text-center text-black border-r">74.25</td>
                          <td className="p-2 text-center text-black border-r">75.45</td>
                          <td className="p-2 text-center text-black border-r">73.94</td>
                          <td className="p-2 text-center text-black border-r">76.83</td>
                          <td className="p-2 text-center text-black border-r">74.92</td>
                          <td className="p-2 text-center text-black border-r">70.71</td>
                          <td className="p-2 text-center text-black border-r">71.63</td>
                          <td className="p-2 text-center text-red-600 border-r">77.52</td>
                          <td className="p-2 text-center text-black border-r">82.29</td>
                          <td className="p-2 text-center text-black border-r">82.11</td>
                          <td className="p-2 text-center text-black border-r">85.17</td>
                          <td className="p-2 text-center text-red-600 border-r">61.14</td>
                          <td className="p-2 text-center text-black border-r">86.21</td>
                          <td className="p-2 text-center text-black border-r">77.40</td>
                          <td className="p-2 text-center text-black border-r">77.14</td>
                          <td className="p-2 text-center text-black border-r">84.01</td>
                          <td className="p-2 text-center text-red-600 border-r">79.72</td>
                          <td className="p-2 text-center text-black">81.83</td>
                        </tr>
                        <tr className="border-b bg-gray-100 font-semibold">
                          <td className="p-2 text-black border-r">Mean</td>
                          <td className="p-2 text-center text-black border-r">63.67</td>
                          <td className="p-2 text-center text-black border-r">74.68</td>
                          <td className="p-2 text-center text-black border-r">76.31</td>
                          <td className="p-2 text-center text-black border-r">76.94</td>
                          <td className="p-2 text-center text-black border-r">75.65</td>
                          <td className="p-2 text-center text-black border-r">77.77</td>
                          <td className="p-2 text-center text-black border-r">75.19</td>
                          <td className="p-2 text-center text-black border-r">70.82</td>
                          <td className="p-2 text-center text-black border-r">72.10</td>
                          <td className="p-2 text-center text-black border-r">80.63</td>
                          <td className="p-2 text-center text-black border-r">78.13</td>
                          <td className="p-2 text-center text-black border-r">82.92</td>
                          <td className="p-2 text-center text-black border-r">83.51</td>
                          <td className="p-2 text-center text-black border-r">82.40</td>
                          <td className="p-2 text-center text-black border-r">86.34</td>
                          <td className="p-2 text-center text-black border-r">78.03</td>
                          <td className="p-2 text-center text-black border-r">78.94</td>
                          <td className="p-2 text-center text-black border-r">84.28</td>
                          <td className="p-2 text-center text-black border-r">81.99</td>
                          <td className="p-2 text-center text-black">82.32</td>
                        </tr>
                        <tr className="border-b bg-gray-100">
                          <td className="p-2 text-black border-r text-xs">Std/Range</td>
                          <td className="p-2 text-center text-black border-r text-xs">1.1/8</td>
                          <td className="p-2 text-center text-black border-r text-xs">1.0/4</td>
                          <td className="p-2 text-center text-black border-r text-xs">1.6/6</td>
                          <td className="p-2 text-center text-black border-r text-xs">1.4/6</td>
                          <td className="p-2 text-center text-black border-r text-xs">1.6/8</td>
                          <td className="p-2 text-center text-black border-r text-xs">1.2/6</td>
                          <td className="p-2 text-center text-black border-r text-xs">0.9/4</td>
                          <td className="p-2 text-center text-black border-r text-xs">2.9/13</td>
                          <td className="p-2 text-center text-black border-r text-xs">1.7/8</td>
                          <td className="p-2 text-center text-black border-r text-xs">1.1/6</td>
                          <td className="p-2 text-center text-black border-r text-xs">8.0/25</td>
                          <td className="p-2 text-center text-black border-r text-xs">0.8/3</td>
                          <td className="p-2 text-center text-black border-r text-xs">2.8/11</td>
                          <td className="p-2 text-center text-black border-r text-xs">5.5/26</td>
                          <td className="p-2 text-center text-black border-r text-xs">0.6/2</td>
                          <td className="p-2 text-center text-black border-r text-xs">0.8/5</td>
                          <td className="p-2 text-center text-black border-r text-xs">1.2/7</td>
                          <td className="p-2 text-center text-black border-r text-xs">0.8/3</td>
                          <td className="p-2 text-center text-black border-r text-xs">0.9/4</td>
                          <td className="p-2 text-center text-black text-xs">0.9/5</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
            
            {/* COCO Benchmark */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div 
                className="bg-gradient-to-r from-green-600 to-green-700 px-6 py-4 cursor-pointer"
                onClick={() => toggleTable('coco')}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Target className="w-6 h-6 text-white mr-3" />
                    <div>
                      <h3 className="text-xl font-semibold text-white">COCO Benchmark</h3>
                      <p className="text-green-100 text-sm">Object detection and 2D pose estimation on COCO dataset</p>
                    </div>
                  </div>
                  {expandedTable === 'coco' ? 
                    <ChevronUp className="w-6 h-6 text-white" /> : 
                    <ChevronDown className="w-6 h-6 text-white" />
                  }
                </div>
              </div>
              
              {expandedTable === 'coco' && (
                <div className="p-6">
                  <div className="mb-4 text-sm text-gray-600">
                    <p><strong>Setup:</strong> Transfer learning to object detection with RetinaNet and 2D pose estimation with TopDown on COCO. Different pre-training settings: 100-epoch (SGD, LARS), 300-epoch (RSB A2, Adan), and 600-epoch (RSB A1).</p>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs border border-gray-200">
                      <thead>
                        <tr className="bg-gray-50 border-b">
                          <th className="text-left p-2 font-semibold text-black border-r">Pre-training</th>
                          <th className="text-center p-2 font-semibold text-black border-r bg-orange-100">VGG (SGD)</th>
                          <th className="text-center p-2 font-semibold text-black border-r bg-orange-100">R-50 (SGD)</th>
                          <th className="text-center p-2 font-semibold text-black border-r bg-blue-100">Swin-T (AdamW)</th>
                          <th className="text-center p-2 font-semibold text-black border-r bg-orange-100">R-50 (SGD)</th>
                          <th className="text-center p-2 font-semibold text-black border-r bg-green-100">R-50 (LARS)</th>
                          <th className="text-center p-2 font-semibold text-black border-r bg-blue-100">R-50 (A3)</th>
                          <th className="text-center p-2 font-semibold text-black border-r bg-blue-100">R-50 (A2)</th>
                          <th className="text-center p-2 font-semibold text-black border-r bg-blue-100">R-50 (A1)</th>
                          <th className="text-center p-2 font-semibold text-black border-r bg-blue-100">R-50 (Adan)</th>
                          <th className="text-center p-2 font-semibold text-black border-r bg-blue-100">Swin-T (AdamW)</th>
                          <th className="text-center p-2 font-semibold text-black bg-blue-100">CNX-T (AdamW)</th>
                        </tr>
                        <tr className="bg-gray-100 border-b text-xs">
                          <th className="text-left p-2 text-black border-r">Optimizer</th>
                          <th className="text-center p-2 text-black border-r">2D Pose</th>
                          <th className="text-center p-2 text-black border-r">2D Pose</th>
                          <th className="text-center p-2 text-black border-r">2D Pose</th>
                          <th className="text-center p-2 text-black border-r">Detection</th>
                          <th className="text-center p-2 text-black border-r">Detection</th>
                          <th className="text-center p-2 text-black border-r">Detection</th>
                          <th className="text-center p-2 text-black border-r">Detection</th>
                          <th className="text-center p-2 text-black border-r">Detection</th>
                          <th className="text-center p-2 text-black border-r">Detection</th>
                          <th className="text-center p-2 text-black border-r">Detection</th>
                          <th className="text-center p-2 text-black">Detection</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b bg-orange-50">
                          <td className="p-2 font-medium text-black border-r">SGD-M</td>
                          <td className="p-2 text-center text-red-600 border-r">47.5</td>
                          <td className="p-2 text-center text-black border-r">71.6</td>
                          <td className="p-2 text-center text-red-600 border-r">38.4</td>
                          <td className="p-2 text-center text-black border-r">36.6</td>
                          <td className="p-2 text-center text-red-600 border-r">27.5</td>
                          <td className="p-2 text-center text-red-600 border-r">28.7</td>
                          <td className="p-2 text-center text-red-600 border-r">23.7</td>
                          <td className="p-2 text-center text-red-600 border-r">34.6</td>
                          <td className="p-2 text-center text-red-600 border-r">27.5</td>
                          <td className="p-2 text-center text-red-600 border-r">37.2</td>
                          <td className="p-2 text-center text-red-600">38.5</td>
                        </tr>
                        <tr className="border-b bg-orange-50">
                          <td className="p-2 font-medium text-black border-r">SGDP</td>
                          <td className="p-2 text-center text-red-600 border-r">47.3</td>
                          <td className="p-2 text-center text-red-600 border-r">41.2</td>
                          <td className="p-2 text-center text-red-600 border-r">38.9</td>
                          <td className="p-2 text-center text-black border-r">36.6</td>
                          <td className="p-2 text-center text-red-600 border-r">17.6</td>
                          <td className="p-2 text-center text-red-600 border-r">18.5</td>
                          <td className="p-2 text-center text-red-600 border-r">26.8</td>
                          <td className="p-2 text-center text-red-600 border-r">26.7</td>
                          <td className="p-2 text-center text-red-600 border-r">27.4</td>
                          <td className="p-2 text-center text-red-600 border-r">37.2</td>
                          <td className="p-2 text-center text-red-600">22.5</td>
                        </tr>
                        <tr className="border-b bg-orange-50">
                          <td className="p-2 font-medium text-black border-r">LION</td>
                          <td className="p-2 text-center text-black border-r">69.5</td>
                          <td className="p-2 text-center text-black border-r">71.5</td>
                          <td className="p-2 text-center text-black border-r">71.3</td>
                          <td className="p-2 text-center text-red-600 border-r">32.1</td>
                          <td className="p-2 text-center text-black border-r">35.8</td>
                          <td className="p-2 text-center text-black border-r">35.4</td>
                          <td className="p-2 text-center text-black border-r">37.6</td>
                          <td className="p-2 text-center text-red-600 border-r">34.6</td>
                          <td className="p-2 text-center text-blue-600 font-semibold border-r">38.8</td>
                          <td className="p-2 text-center text-blue-600 font-semibold border-r">41.9</td>
                          <td className="p-2 text-center text-black">42.8</td>
                        </tr>
                        <tr className="border-b bg-blue-50">
                          <td className="p-2 font-medium text-black border-r">Adam</td>
                          <td className="p-2 text-center text-blue-600 font-semibold border-r">69.8</td>
                          <td className="p-2 text-center text-black border-r">71.6</td>
                          <td className="p-2 text-center text-black border-r">72.7</td>
                          <td className="p-2 text-center text-black border-r">36.2</td>
                          <td className="p-2 text-center text-black border-r">36.2</td>
                          <td className="p-2 text-center text-black border-r">35.8</td>
                          <td className="p-2 text-center text-black border-r">38.3</td>
                          <td className="p-2 text-center text-black border-r">38.4</td>
                          <td className="p-2 text-center text-black border-r">38.6</td>
                          <td className="p-2 text-center text-blue-600 font-semibold border-r">41.9</td>
                          <td className="p-2 text-center text-black">43.1</td>
                        </tr>
                        <tr className="border-b bg-blue-50">
                          <td className="p-2 font-medium text-black border-r">Adamax</td>
                          <td className="p-2 text-center text-black border-r">69.0</td>
                          <td className="p-2 text-center text-black border-r">71.2</td>
                          <td className="p-2 text-center text-black border-r">72.4</td>
                          <td className="p-2 text-center text-blue-600 font-semibold border-r">36.8</td>
                          <td className="p-2 text-center text-black border-r">36.8</td>
                          <td className="p-2 text-center text-black border-r">36.4</td>
                          <td className="p-2 text-center text-black border-r">38.3</td>
                          <td className="p-2 text-center text-black border-r">38.4</td>
                          <td className="p-2 text-center text-black border-r">38.3</td>
                          <td className="p-2 text-center text-black border-r">41.5</td>
                          <td className="p-2 text-center text-black">42.0</td>
                        </tr>
                        <tr className="border-b bg-blue-50">
                          <td className="p-2 font-medium text-black border-r">NAdam</td>
                          <td className="p-2 text-center text-black border-r">69.7</td>
                          <td className="p-2 text-center text-blue-600 font-semibold border-r">71.8</td>
                          <td className="p-2 text-center text-black border-r">71.9</td>
                          <td className="p-2 text-center text-black border-r">36.0</td>
                          <td className="p-2 text-center text-black border-r">36.6</td>
                          <td className="p-2 text-center text-black border-r">36.1</td>
                          <td className="p-2 text-center text-black border-r">38.2</td>
                          <td className="p-2 text-center text-black border-r">38.4</td>
                          <td className="p-2 text-center text-black border-r">38.7</td>
                          <td className="p-2 text-center text-blue-600 font-semibold border-r">41.9</td>
                          <td className="p-2 text-center text-purple-600 font-semibold">43.4</td>
                        </tr>
                        <tr className="border-b bg-blue-50">
                          <td className="p-2 font-medium text-black border-r">AdamW</td>
                          <td className="p-2 text-center text-blue-600 font-semibold border-r">70.0</td>
                          <td className="p-2 text-center text-blue-600 font-semibold border-r">72.0</td>
                          <td className="p-2 text-center text-purple-600 font-semibold border-r">72.8</td>
                          <td className="p-2 text-center text-blue-600 font-semibold border-r">37.1</td>
                          <td className="p-2 text-center text-blue-600 font-semibold border-r">37.1</td>
                          <td className="p-2 text-center text-blue-600 font-semibold border-r">36.7</td>
                          <td className="p-2 text-center text-black border-r">38.4</td>
                          <td className="p-2 text-center text-purple-600 font-semibold border-r">39.5</td>
                          <td className="p-2 text-center text-black border-r">36.8</td>
                          <td className="p-2 text-center text-black border-r">41.8</td>
                          <td className="p-2 text-center text-purple-600 font-semibold">43.4</td>
                        </tr>
                        <tr className="border-b bg-blue-50">
                          <td className="p-2 font-medium text-black border-r">LAMB</td>
                          <td className="p-2 text-center text-black border-r">68.5</td>
                          <td className="p-2 text-center text-black border-r">71.5</td>
                          <td className="p-2 text-center text-black border-r">71.7</td>
                          <td className="p-2 text-center text-blue-600 font-semibold border-r">36.7</td>
                          <td className="p-2 text-center text-purple-600 font-semibold border-r">37.5</td>
                          <td className="p-2 text-center text-purple-600 font-semibold border-r">37.7</td>
                          <td className="p-2 text-center text-purple-600 font-semibold border-r">38.6</td>
                          <td className="p-2 text-center text-blue-600 font-semibold border-r">38.9</td>
                          <td className="p-2 text-center text-black border-r">38.6</td>
                          <td className="p-2 text-center text-black border-r">41.8</td>
                          <td className="p-2 text-center text-black">42.6</td>
                        </tr>
                        <tr className="border-b bg-blue-50">
                          <td className="p-2 font-medium text-black border-r">RAdam</td>
                          <td className="p-2 text-center text-blue-600 font-semibold border-r">69.8</td>
                          <td className="p-2 text-center text-blue-600 font-semibold border-r">71.8</td>
                          <td className="p-2 text-center text-black border-r">72.6</td>
                          <td className="p-2 text-center text-black border-r">36.6</td>
                          <td className="p-2 text-center text-black border-r">36.5</td>
                          <td className="p-2 text-center text-black border-r">36.0</td>
                          <td className="p-2 text-center text-black border-r">38.2</td>
                          <td className="p-2 text-center text-black border-r">38.4</td>
                          <td className="p-2 text-center text-black border-r">38.6</td>
                          <td className="p-2 text-center text-black border-r">41.6</td>
                          <td className="p-2 text-center text-blue-600 font-semibold">43.3</td>
                        </tr>
                        <tr className="border-b bg-blue-50">
                          <td className="p-2 font-medium text-black border-r">AdamP</td>
                          <td className="p-2 text-center text-black border-r">69.7</td>
                          <td className="p-2 text-center text-black border-r">71.5</td>
                          <td className="p-2 text-center text-purple-600 font-semibold border-r">72.8</td>
                          <td className="p-2 text-center text-black border-r">36.5</td>
                          <td className="p-2 text-center text-blue-600 font-semibold border-r">37.2</td>
                          <td className="p-2 text-center text-blue-600 font-semibold border-r">36.5</td>
                          <td className="p-2 text-center text-blue-600 font-semibold border-r">38.5</td>
                          <td className="p-2 text-center text-black border-r">38.9</td>
                          <td className="p-2 text-center text-blue-600 font-semibold border-r">38.8</td>
                          <td className="p-2 text-center text-black border-r">41.7</td>
                          <td className="p-2 text-center text-blue-600 font-semibold">43.3</td>
                        </tr>
                        <tr className="border-b bg-blue-50">
                          <td className="p-2 font-medium text-black border-r">Adan</td>
                          <td className="p-2 text-center text-black border-r">69.7</td>
                          <td className="p-2 text-center text-purple-600 font-semibold border-r">72.1</td>
                          <td className="p-2 text-center text-purple-600 font-semibold border-r">72.8</td>
                          <td className="p-2 text-center text-purple-600 font-semibold border-r">37.7</td>
                          <td className="p-2 text-center text-black border-r">37.0</td>
                          <td className="p-2 text-center text-black border-r">36.0</td>
                          <td className="p-2 text-center text-purple-600 font-semibold border-r">38.6</td>
                          <td className="p-2 text-center text-blue-600 font-semibold border-r">39.0</td>
                          <td className="p-2 text-center text-purple-600 font-semibold border-r">39.4</td>
                          <td className="p-2 text-center text-purple-600 font-semibold border-r">42.0</td>
                          <td className="p-2 text-center text-black">43.2</td>
                        </tr>
                        <tr className="border-b bg-green-50">
                          <td className="p-2 font-medium text-black border-r">AdaFactor</td>
                          <td className="p-2 text-center text-purple-600 font-semibold border-r">72.8</td>
                          <td className="p-2 text-center text-black border-r">71.7</td>
                          <td className="p-2 text-center text-black border-r">72.7</td>
                          <td className="p-2 text-center text-black border-r">35.6</td>
                          <td className="p-2 text-center text-blue-600 font-semibold border-r">37.0</td>
                          <td className="p-2 text-center text-black border-r">36.4</td>
                          <td className="p-2 text-center text-blue-600 font-semibold border-r">38.5</td>
                          <td className="p-2 text-center text-black border-r">37.8</td>
                          <td className="p-2 text-center text-black border-r">38.7</td>
                          <td className="p-2 text-center text-black border-r">40.5</td>
                          <td className="p-2 text-center text-black">43.1</td>
                        </tr>
                        <tr className="border-b bg-gray-200">
                          <td className="p-2 font-medium text-black border-r">AdaGrad</td>
                          <td className="p-2 text-center text-black border-r">66.0</td>
                          <td className="p-2 text-center text-black border-r">61.2</td>
                          <td className="p-2 text-center text-red-600 border-r">48.4</td>
                          <td className="p-2 text-center text-red-600 border-r">26.4</td>
                          <td className="p-2 text-center text-red-600 border-r">21.9</td>
                          <td className="p-2 text-center text-red-600 border-r">28.3</td>
                          <td className="p-2 text-center text-red-600 border-r">32.7</td>
                          <td className="p-2 text-center text-red-600 border-r">27.1</td>
                          <td className="p-2 text-center text-red-600 border-r">33.7</td>
                          <td className="p-2 text-center text-red-600 border-r">32.9</td>
                          <td className="p-2 text-center text-red-600">23.7</td>
                        </tr>
                        <tr className="border-b bg-gray-200">
                          <td className="p-2 font-medium text-black border-r">RMSProp</td>
                          <td className="p-2 text-center text-black border-r">68.8</td>
                          <td className="p-2 text-center text-black border-r">71.6</td>
                          <td className="p-2 text-center text-black border-r">72.5</td>
                          <td className="p-2 text-center text-black border-r">35.3</td>
                          <td className="p-2 text-center text-black border-r">36.2</td>
                          <td className="p-2 text-center text-black border-r">35.6</td>
                          <td className="p-2 text-center text-black border-r">37.8</td>
                          <td className="p-2 text-center text-black border-r">38.3</td>
                          <td className="p-2 text-center text-black border-r">38.7</td>
                          <td className="p-2 text-center text-black border-r">41.5</td>
                          <td className="p-2 text-center text-black">43.1</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
            
            {/* ImageNet-1K Benchmark */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div 
                className="bg-gradient-to-r from-purple-600 to-purple-700 px-6 py-4 cursor-pointer"
                onClick={() => toggleTable('imagenet')}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <TrendingUp className="w-6 h-6 text-white mr-3" />
                    <div>
                      <h3 className="text-xl font-semibold text-white">ImageNet-1K Benchmark</h3>
                      <p className="text-purple-100 text-sm">DeiT-S and ResNet-50 training with popular optimizers</p>
                    </div>
                  </div>
                  {expandedTable === 'imagenet' ? 
                    <ChevronUp className="w-6 h-6 text-white" /> : 
                    <ChevronDown className="w-6 h-6 text-white" />
                  }
                </div>
              </div>
              
              {expandedTable === 'imagenet' && (
                <div className="p-6">
                  <div className="mb-4 text-sm text-gray-600">
                    <p><strong>Setup:</strong> DeiT-S and ResNet-50 training for 300 epochs with DeiT and RSB A2 settings on ImageNet-1K dataset. Top-1 accuracy (%) is reported.</p>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border border-gray-200">
                      <thead>
                        <tr className="bg-gray-50 border-b">
                          <th className="text-left p-3 font-semibold text-black border-r">Optimizer</th>
                          <th className="text-center p-3 font-semibold text-black border-r">DeiT-S (DeiT)</th>
                          <th className="text-center p-3 font-semibold text-black">ResNet-50 (A2)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b bg-orange-50">
                          <td className="p-3 font-medium text-black border-r">SGD-M</td>
                          <td className="p-3 text-center text-red-600 border-r">75.35</td>
                          <td className="p-3 text-center text-black">78.82</td>
                        </tr>
                        <tr className="border-b bg-orange-50">
                          <td className="p-3 font-medium text-black border-r">SGDP</td>
                          <td className="p-3 text-center text-black border-r">76.34</td>
                          <td className="p-3 text-center text-black">78.02</td>
                        </tr>
                        <tr className="border-b bg-orange-50">
                          <td className="p-3 font-medium text-black border-r">LION</td>
                          <td className="p-3 text-center text-black border-r">78.78</td>
                          <td className="p-3 text-center text-black">78.92</td>
                        </tr>
                        <tr className="border-b bg-blue-50">
                          <td className="p-3 font-medium text-black border-r">Adam</td>
                          <td className="p-3 text-center text-black border-r">78.44</td>
                          <td className="p-3 text-center text-black">78.16</td>
                        </tr>
                        <tr className="border-b bg-blue-50">
                          <td className="p-3 font-medium text-black border-r">Adamax</td>
                          <td className="p-3 text-center text-black border-r">77.71</td>
                          <td className="p-3 text-center text-black">78.05</td>
                        </tr>
                        <tr className="border-b bg-blue-50">
                          <td className="p-3 font-medium text-black border-r">NAdam</td>
                          <td className="p-3 text-center text-black border-r">78.26</td>
                          <td className="p-3 text-center text-black">78.97</td>
                        </tr>
                        <tr className="border-b bg-blue-50">
                          <td className="p-3 font-medium text-black border-r">AdamW</td>
                          <td className="p-3 text-center text-blue-600 font-semibold border-r">80.38</td>
                          <td className="p-3 text-center text-blue-600 font-semibold">79.88</td>
                        </tr>
                        <tr className="border-b bg-blue-50">
                          <td className="p-3 font-medium text-black border-r">LAMB</td>
                          <td className="p-3 text-center text-blue-600 font-semibold border-r">80.23</td>
                          <td className="p-3 text-center text-blue-600 font-semibold">79.84</td>
                        </tr>
                        <tr className="border-b bg-blue-50">
                          <td className="p-3 font-medium text-black border-r">RAdam</td>
                          <td className="p-3 text-center text-black border-r">78.54</td>
                          <td className="p-3 text-center text-black">78.75</td>
                        </tr>
                        <tr className="border-b bg-blue-50">
                          <td className="p-3 font-medium text-black border-r">AdamP</td>
                          <td className="p-3 text-center text-black border-r">79.26</td>
                          <td className="p-3 text-center text-black">79.28</td>
                        </tr>
                        <tr className="border-b bg-blue-50">
                          <td className="p-3 font-medium text-black border-r">Adan</td>
                          <td className="p-3 text-center text-purple-600 font-semibold border-r">80.81</td>
                          <td className="p-3 text-center text-purple-600 font-semibold">79.91</td>
                        </tr>
                        <tr className="border-b bg-green-50">
                          <td className="p-3 font-medium text-black border-r">AdaBound</td>
                          <td className="p-3 text-center text-red-600 border-r">72.96</td>
                          <td className="p-3 text-center text-red-600">75.37</td>
                        </tr>
                        <tr className="border-b bg-green-50">
                          <td className="p-3 font-medium text-black border-r">LARS</td>
                          <td className="p-3 text-center text-red-600 border-r">73.18</td>
                          <td className="p-3 text-center text-black">79.66</td>
                        </tr>
                        <tr className="border-b bg-green-50">
                          <td className="p-3 font-medium text-black border-r">AdaFactor</td>
                          <td className="p-3 text-center text-black border-r">79.98</td>
                          <td className="p-3 text-center text-black">79.36</td>
                        </tr>
                        <tr className="border-b bg-green-50">
                          <td className="p-3 font-medium text-black border-r">AdaBelief</td>
                          <td className="p-3 text-center text-red-600 border-r">75.32</td>
                          <td className="p-3 text-center text-black">78.25</td>
                        </tr>
                        <tr className="border-b bg-green-50">
                          <td className="p-3 font-medium text-black border-r">NovoGrad</td>
                          <td className="p-3 text-center text-red-600 border-r">71.26</td>
                          <td className="p-3 text-center text-red-600">76.83</td>
                        </tr>
                        <tr className="border-b bg-green-50">
                          <td className="p-3 font-medium text-black border-r">Sophia</td>
                          <td className="p-3 text-center text-black border-r">79.65</td>
                          <td className="p-3 text-center text-black">79.13</td>
                        </tr>
                        <tr className="border-b bg-gray-200">
                          <td className="p-3 font-medium text-black border-r">AdaGrad</td>
                          <td className="p-3 text-center text-red-600 border-r">54.96</td>
                          <td className="p-3 text-center text-red-600">74.92</td>
                        </tr>
                        <tr className="border-b bg-gray-200">
                          <td className="p-3 font-medium text-black border-r">AdaDelta</td>
                          <td className="p-3 text-center text-red-600 border-r">74.14</td>
                          <td className="p-3 text-center text-red-600">77.40</td>
                        </tr>
                        <tr className="border-b bg-gray-200">
                          <td className="p-3 font-medium text-black border-r">RMSProp</td>
                          <td className="p-3 text-center text-black border-r">78.03</td>
                          <td className="p-3 text-center text-black">78.04</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
            
            {/* CIFAR Settings */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div 
                className="bg-gradient-to-r from-amber-600 to-amber-700 px-6 py-4 cursor-pointer"
                onClick={() => toggleTable('cifar-settings')}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <FileText className="w-6 h-6 text-white mr-3" />
                    <div>
                      <h3 className="text-xl font-semibold text-white">CIFAR Settings</h3>
                      <p className="text-amber-100 text-sm">Hyperparameters (learning rate / weight decay) for optimizers on CIFAR-100</p>
                    </div>
                  </div>
                  {expandedTable === 'cifar-settings' ? 
                    <ChevronUp className="w-6 h-6 text-white" /> : 
                    <ChevronDown className="w-6 h-6 text-white" />
                  }
                </div>
              </div>
              
              {expandedTable === 'cifar-settings' && (
                <div className="p-6">
                  <div className="mb-6 text-sm text-gray-600">
                    <p><strong>Setup:</strong> Basic optimizing hyperparameters for primary and classical CNNs, and modern DNNs with different optimizers on CIFAR-100. Learning rate (lr) and weight decay (wd) are shown for each backbone architecture.</p>
                    <p className="mt-2"><strong>Color Coding:</strong> <span className="bg-orange-50 px-2 py-1 rounded text-xs">SGD variants</span>, <span className="bg-blue-50 px-2 py-1 rounded text-xs">Adam variants</span>, <span className="bg-green-50 px-2 py-1 rounded text-xs">Other adaptive</span>, <span className="bg-purple-100 px-2 py-1 rounded text-xs">Classical methods</span></p>
                  </div>
                  
                  <div className="space-y-8">
                    {/* Primary and Classical CNNs Table */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-4">Primary and Classical CNNs</h4>
                      <div className="bg-white rounded-lg shadow-lg">
                        <div className="overflow-x-auto">
                          <table className="w-full border-collapse border border-gray-300">
                            <thead>
                              <tr className="bg-gray-100">
                                <th className="text-left p-2 font-semibold text-black border border-gray-300">Optimizer</th>
                                <th className="text-center p-2 font-semibold text-black border border-gray-300">AlexNet<br/>lr / wd</th>
                                <th className="text-center p-2 font-semibold text-black border border-gray-300">VGG-13<br/>lr / wd</th>
                                <th className="text-center p-2 font-semibold text-black border border-gray-300">R-50<br/>lr / wd</th>
                                <th className="text-center p-2 font-semibold text-black border border-gray-300">R-101<br/>lr / wd</th>
                                <th className="text-center p-2 font-semibold text-black border border-gray-300">R-101 (DeiT)<br/>lr / wd</th>
                                <th className="text-center p-2 font-semibold text-black border border-gray-300">Mob-V2<br/>lr / wd</th>
                                <th className="text-center p-2 font-semibold text-black border border-gray-300">Eff-B0<br/>lr / wd</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-b bg-orange-50">
                                <td className="p-2 font-medium text-black border border-gray-300">SGD-M</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-3 / 5e-4</td>
                                <td className="p-2 text-center text-black border border-gray-300">3e-1 / 2e-4</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-1 / 1e-4</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-1 / 1e-4</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-1 / 1e-4</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-1 / 1e-4</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-1 / 1e-4</td>
                              </tr>
                              <tr className="border-b bg-orange-50">
                                <td className="p-2 font-medium text-black border border-gray-300">SGDP</td>
                                <td className="p-2 text-center text-black border border-gray-300">2e-3 / 1e-4</td>
                                <td className="p-2 text-center text-black border border-gray-300">3e-1 / 1e-4</td>
                                <td className="p-2 text-center text-black border border-gray-300">2e-1 / 5e-4</td>
                                <td className="p-2 text-center text-black border border-gray-300">2e-1 / 5e-4</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-2 / 1e-4</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-2 / 1e-4</td>
                                <td className="p-2 text-center text-black border border-gray-300">0.1 / 1e-4</td>
                              </tr>
                              <tr className="border-b bg-orange-50">
                                <td className="p-2 font-medium text-black border border-gray-300">LION</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-5 / 0</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-5 / 0</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-4 / 0</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-4 / 0</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-5 / 0</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-4 / 0</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-4 / 1e-8</td>
                              </tr>
                              <tr className="border-b bg-blue-50">
                                <td className="p-2 font-medium text-black border border-gray-300">Adam</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-4 / 0</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-4 / 1e-8</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-4 / 1e-8</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-4 / 1e-8</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-4 / 1e-8</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-3 / 0</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-3 / 0</td>
                              </tr>
                              <tr className="border-b bg-blue-50">
                                <td className="p-2 font-medium text-black border border-gray-300">Adamax</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-4 / 1e-4</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-4 / 1e-8</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-3 / 1e-4</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-4 / 1e-4</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-4 / 1e-4</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-3 / 1e-4</td>
                                <td className="p-2 text-center text-black border border-gray-300">2e-3 / 1e-4</td>
                              </tr>
                              <tr className="border-b bg-blue-50">
                                <td className="p-2 font-medium text-black border border-gray-300">AdamW</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-4 / 5e-2</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-4 / 5e-2</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-3 / 5e-2</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-3 / 5e-2</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-4 / 5e-2</td>
                                <td className="p-2 text-center text-black border border-gray-300">2e-3 / 5e-2</td>
                                <td className="p-2 text-center text-black border border-gray-300">3e-3 / 5e-2</td>
                              </tr>
                              <tr className="border-b bg-blue-50">
                                <td className="p-2 font-medium text-black border border-gray-300">AdamP</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-4 / 1e-2</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-3 / 5e-2</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-3 / 5e-2</td>
                                <td className="p-2 text-center text-black border border-gray-300">2e-3 / 5e-2</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-3 / 1e-2</td>
                                <td className="p-2 text-center text-black border border-gray-300">2e-3 / 1e-2</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-3 / 1e-2</td>
                              </tr>
                              <tr className="border-b bg-blue-50">
                                <td className="p-2 font-medium text-black border border-gray-300">LAMB</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-3 / 5e-2</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-3 / 2e-2</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-3 / 5e-2</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-3 / 2e-2</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-3 / 5e-2</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-3 / 2e-2</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-3 / 2e-2</td>
                              </tr>
                              <tr className="border-b bg-blue-50">
                                <td className="p-2 font-medium text-black border border-gray-300">NAdam</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-4 / 1e-8</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-4 / 0</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-3 / 0</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-3 / 0</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-4 / 0</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-3 / 0</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-3 / 1e-8</td>
                              </tr>
                              <tr className="border-b bg-blue-50">
                                <td className="p-2 font-medium text-black border border-gray-300">RAdam</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-3 / 5e-4</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-3 / 0</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-3 / 0</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-3 / 0</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-4 / 1e-8</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-3 / 0</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-3 / 1e-8</td>
                              </tr>
                              <tr className="border-b bg-blue-50">
                                <td className="p-2 font-medium text-black border border-gray-300">Adan</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-3 / 2e-2</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-3 / 5e-2</td>
                                <td className="p-2 text-center text-black border border-gray-300">2e-3 / 5e-2</td>
                                <td className="p-2 text-center text-black border border-gray-300">2e-3 / 5e-2</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-4 / 1e-2</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-3 / 5e-2</td>
                                <td className="p-2 text-center text-black border border-gray-300">2e-2 / 2e-2</td>
                              </tr>
                              <tr className="border-b bg-green-50">
                                <td className="p-2 font-medium text-black border border-gray-300">AdaBelief</td>
                                <td className="p-2 text-center text-black border border-gray-300">2e-3 / 5e-2</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-3 / 2e-2</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-3 / 5e-2</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-3 / 5e-2</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-3 / 1e-2</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-3 / 0</td>
                                <td className="p-2 text-center text-black border border-gray-300">2e-3 / 1e-2</td>
                              </tr>
                              <tr className="border-b bg-green-50">
                                <td className="p-2 font-medium text-black border border-gray-300">AdaBound</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-4 / 1e-4</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-3 / 2e-2</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-4 / 1e-2</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-4 / 1e-2</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-4 / 0</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-4 / 1e-2</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-4 / 1e-2</td>
                              </tr>
                              <tr className="border-b bg-green-50">
                                <td className="p-2 font-medium text-black border border-gray-300">AdaFactor</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-4 / 2e-2</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-4 / 5e-2</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-4 / 1e-2</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-4 / 5e-2</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-4 / 5e-2</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-4 / 1e-2</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-3 / 2e-2</td>
                              </tr>
                              <tr className="border-b bg-green-50">
                                <td className="p-2 font-medium text-black border border-gray-300">LARS</td>
                                <td className="p-2 text-center text-black border border-gray-300">0.5 / 1e-6</td>
                                <td className="p-2 text-center text-black border border-gray-300">1.2 / 5e-5</td>
                                <td className="p-2 text-center text-black border border-gray-300">1.2 / 1e-4</td>
                                <td className="p-2 text-center text-black border border-gray-300">1.2 / 1e-4</td>
                                <td className="p-2 text-center text-black border border-gray-300">1.0 / 1e-6</td>
                                <td className="p-2 text-center text-black border border-gray-300">1.2 / 1e-6</td>
                                <td className="p-2 text-center text-black border border-gray-300">1.4 / 1e-6</td>
                              </tr>
                              <tr className="border-b bg-green-50">
                                <td className="p-2 font-medium text-black border border-gray-300">Novograd</td>
                                <td className="p-2 text-center text-black border border-gray-300">2e-3 / 1e-8</td>
                                <td className="p-2 text-center text-black border border-gray-300">2e-3 / 1e-2</td>
                                <td className="p-2 text-center text-black border border-gray-300">2e-3 / 1e-2</td>
                                <td className="p-2 text-center text-black border border-gray-300">2e-3 / 1e-2</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-3 / 1e-2</td>
                                <td className="p-2 text-center text-black border border-gray-300">2e-3 / 1e-2</td>
                                <td className="p-2 text-center text-black border border-gray-300">2e-3 / 0</td>
                              </tr>
                              <tr className="border-b bg-green-50">
                                <td className="p-2 font-medium text-black border border-gray-300">Sophia</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-5 / 1e-2</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-5 / 1e-1</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-4 / 1e-1</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-4 / 1e-1</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-5 / 2e-1</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-4 / 2e-1</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-4 / 2e-1</td>
                              </tr>
                              <tr className="border-b bg-purple-100">
                                <td className="p-2 font-medium text-black border border-gray-300">AdaGrad</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-5 / 1e-4</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-4 / 1e-8</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-4 / 1e-8</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-4 / 1e-8</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-4 / 0</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-4 / 1e-8</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-4 / 1e-4</td>
                              </tr>
                              <tr className="border-b bg-purple-100">
                                <td className="p-2 font-medium text-black border border-gray-300">AdaDelta</td>
                                <td className="p-2 text-center text-black border border-gray-300">0.1 / 1e-8</td>
                                <td className="p-2 text-center text-black border border-gray-300">2.0 / 0</td>
                                <td className="p-2 text-center text-black border border-gray-300">1.5 / 0</td>
                                <td className="p-2 text-center text-black border border-gray-300">1.5 / 0</td>
                                <td className="p-2 text-center text-black border border-gray-300">1.8 / 0</td>
                                <td className="p-2 text-center text-black border border-gray-300">2.0 / 0</td>
                                <td className="p-2 text-center text-black border border-gray-300">1.5 / 0</td>
                              </tr>
                              <tr className="border-b bg-purple-100">
                                <td className="p-2 font-medium text-black border border-gray-300">RMSProp</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-4 / 0</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-4 / 1e-8</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-3 / 0</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-3 / 0</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-4 / 1e-8</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-3 / 0</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-4 / 0</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>

                    {/* Modern DNNs Table */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-4">Modern DNNs</h4>
                      <div className="bg-white rounded-lg shadow-lg">
                        <div className="overflow-x-auto">
                          <table className="w-full border-collapse border border-gray-300">
                            <thead>
                              <tr className="bg-gray-100">
                                <th className="text-left p-2 font-semibold text-black border border-gray-300">Optimizer</th>
                                <th className="text-center p-2 font-semibold text-black border border-gray-300">DeiT-S<br/>lr / wd</th>
                                <th className="text-center p-2 font-semibold text-black border border-gray-300">MLP-S<br/>lr / wd</th>
                                <th className="text-center p-2 font-semibold text-black border border-gray-300">Swin-T<br/>lr / wd</th>
                                <th className="text-center p-2 font-semibold text-black border border-gray-300">CX-T<br/>lr / wd</th>
                                <th className="text-center p-2 font-semibold text-black border border-gray-300">Moga-S<br/>lr / wd</th>
                                <th className="text-center p-2 font-semibold text-black border border-gray-300">IF-S12<br/>lr / wd</th>
                                <th className="text-center p-2 font-semibold text-black border border-gray-300">PF-S12<br/>lr / wd</th>
                                <th className="text-center p-2 font-semibold text-black border border-gray-300">CF-S12<br/>lr / wd</th>
                                <th className="text-center p-2 font-semibold text-black border border-gray-300">AF-S12<br/>lr / wd</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-b bg-orange-50">
                                <td className="p-2 font-medium text-black border border-gray-300">SGD-M</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-1 / 1e-4</td>
                                <td className="p-2 text-center text-black border border-gray-300">2e-1 / 5e-5</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-2 / 1e-4</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-2 / 1e-8</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-2 / 1e-8</td>
                                <td className="p-2 text-center text-black border border-gray-300">3e-2 / 1e-4</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-2 / 1e-4</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-2 / 1e-4</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-1 / 1e-4</td>
                              </tr>
                              <tr className="border-b bg-orange-50">
                                <td className="p-2 font-medium text-black border border-gray-300">SGDP</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-1 / 1e-4</td>
                                <td className="p-2 text-center text-black border border-gray-300">2e-1 / 1e-4</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-1 / 1e-4</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-3 / 1e-8</td>
                                <td className="p-2 text-center text-black border border-gray-300">2e-1 / 1e-6</td>
                                <td className="p-2 text-center text-black border border-gray-300">3e-2 / 1e-4</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-2 / 1e-4</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-1 / 1e-4</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-1 / 1e-4</td>
                              </tr>
                              <tr className="border-b bg-orange-50">
                                <td className="p-2 font-medium text-black border border-gray-300">LION</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-5 / 1e-3</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-4 / 0</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-5 / 1e-8</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-4 / 0</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-4 / 1e-3</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-5 / 0</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-5 / 0</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-4 / 0</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-5 / 0</td>
                              </tr>
                              <tr className="border-b bg-blue-50">
                                <td className="p-2 font-medium text-black border border-gray-300">Adam</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-4 / 1e-8</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-4 / 1e-8</td>
                                <td className="p-2 text-center text-black border border-gray-300">2e-4 / 0</td>
                                <td className="p-2 text-center text-black border border-gray-300">2e-3 / 1e-8</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-3 / 1e-8</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-4 / 1e-8</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-4 / 1e-8</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-3 / 0</td>
                                <td className="p-2 text-center text-black border border-gray-300">2e-4 / 0</td>
                              </tr>
                              <tr className="border-b bg-blue-50">
                                <td className="p-2 font-medium text-black border border-gray-300">Adamax</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-4 / 1e-4</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-3 / 0</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-4 / 1e-4</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-3 / 1e-8</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-3 / 1e-8</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-3 / 1e-4</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-3 / 1e-8</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-3 / 0</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-4 / 1e-4</td>
                              </tr>
                              <tr className="border-b bg-blue-50">
                                <td className="p-2 font-medium text-black border border-gray-300">AdamW</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-4 / 5e-2</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-4 / 5e-2</td>
                                <td className="p-2 text-center text-black border border-gray-300">2e-4 / 5e-2</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-4 / 5e-2</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-4 / 5e-2</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-4 / 5e-2</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-3 / 5e-2</td>
                                <td className="p-2 text-center text-black border border-gray-300">2e-3 / 5e-2</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-4 / 5e-2</td>
                              </tr>
                              <tr className="border-b bg-blue-50">
                                <td className="p-2 font-medium text-black border border-gray-300">AdamP</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-3 / 5e-2</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-4 / 5e-2</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-4 / 5e-2</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-3 / 2e-2</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-3 / 5e-2</td>
                                <td className="p-2 text-center text-black border border-gray-300">2e-3 / 5e-2</td>
                                <td className="p-2 text-center text-black border border-gray-300">2e-3 / 5e-2</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-3 / 5e-2</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-3 / 5e-2</td>
                              </tr>
                              <tr className="border-b bg-blue-50">
                                <td className="p-2 font-medium text-black border border-gray-300">LAMB</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-3 / 5e-2</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-3 / 5e-2</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-3 / 2e-2</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-3 / 5e-2</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-3 / 2e-2</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-3 / 5e-2</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-3 / 1e-2</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-3 / 5e-2</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-3 / 5e-2</td>
                              </tr>
                              <tr className="border-b bg-blue-50">
                                <td className="p-2 font-medium text-black border border-gray-300">NAdam</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-4 / 0</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-4 / 1e-8</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-4 / 1e-4</td>
                                <td className="p-2 text-center text-black border border-gray-300">2e-3 / 1e-8</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-3 / 1e-8</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-4 / 0</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-4 / 0</td>
                                <td className="p-2 text-center text-black border border-gray-300">2e-3 / 0</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-4 / 0</td>
                              </tr>
                              <tr className="border-b bg-blue-50">
                                <td className="p-2 font-medium text-black border border-gray-300">RAdam</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-4 / 1e-8</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-3 / 1e-8</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-4 / 1e-4</td>
                                <td className="p-2 text-center text-black border border-gray-300">2e-3 / 1e-8</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-4 / 0</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-4 / 1e-8</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-4 / 1e-8</td>
                                <td className="p-2 text-center text-black border border-gray-300">2e-3 / 0</td>
                                <td className="p-2 text-center text-black border border-gray-300">2e-4 / 0</td>
                              </tr>
                              <tr className="border-b bg-blue-50">
                                <td className="p-2 font-medium text-black border border-gray-300">Adan</td>
                                <td className="p-2 text-center text-black border border-gray-300">2e-3 / 5e-2</td>
                                <td className="p-2 text-center text-black border border-gray-300">2e-3 / 2e-2</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-3 / 5e-2</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-3 / 5e-2</td>
                                <td className="p-2 text-center text-black border border-gray-300">2e-3 / 5e-2</td>
                                <td className="p-2 text-center text-black border border-gray-300">2e-3 / 5e-2</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-3 / 5e-2</td>
                                <td className="p-2 text-center text-black border border-gray-300">2e-3 / 5e-2</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-3 / 2e-2</td>
                              </tr>
                              <tr className="border-b bg-green-50">
                                <td className="p-2 font-medium text-black border border-gray-300">AdaBelief</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-3 / 1e-2</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-3 / 2e-2</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-3 / 2e-2</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-3 / 1e-2</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-3 / 1e-2</td>
                                <td className="p-2 text-center text-black border border-gray-300">6e-3 / 1e-2</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-3 / 2e-2</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-3 / 1e-2</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-3 / 2e-2</td>
                              </tr>
                              <tr className="border-b bg-green-50">
                                <td className="p-2 font-medium text-black border border-gray-300">AdaBound</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-3 / 0</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-3 / 0</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-3 / 1e-4</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-3 / 1e-4</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-4 / 1e-8</td>
                                <td className="p-2 text-center text-black border border-gray-300">3e-3 / 1e-4</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-4 / 0</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-3 / 1e-8</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-3 / 1e-4</td>
                              </tr>
                              <tr className="border-b bg-green-50">
                                <td className="p-2 font-medium text-black border border-gray-300">AdaFactor</td>
                                <td className="p-2 text-center text-black border border-gray-300">2e-4 / 1e-2</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-3 / 1e-2</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-4 / 2e-2</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-4 / 5e-2</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-3 / 1e-2</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-4 / 5e-2</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-4 / 1e-2</td>
                                <td className="p-2 text-center text-black border border-gray-300">2e-3 / 1e-2</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-4 / 1e-2</td>
                              </tr>
                              <tr className="border-b bg-green-50">
                                <td className="p-2 font-medium text-black border border-gray-300">LARS</td>
                                <td className="p-2 text-center text-black border border-gray-300">0.6 / 1e-6</td>
                                <td className="p-2 text-center text-black border border-gray-300">0.5 / 1e-6</td>
                                <td className="p-2 text-center text-black border border-gray-300">0.8 / 1e-4</td>
                                <td className="p-2 text-center text-black border border-gray-300">6e-2 / 0</td>
                                <td className="p-2 text-center text-black border border-gray-300">6e-2 / 0</td>
                                <td className="p-2 text-center text-black border border-gray-300">0.6 / 1e-8</td>
                                <td className="p-2 text-center text-black border border-gray-300">0.5 / 1e-8</td>
                                <td className="p-2 text-center text-black border border-gray-300">0.8 / 1e-6</td>
                                <td className="p-2 text-center text-black border border-gray-300">0.6 / 1e-6</td>
                              </tr>
                              <tr className="border-b bg-green-50">
                                <td className="p-2 font-medium text-black border border-gray-300">Novograd</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-3 / 1e-4</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-3 / 0</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-3 / 1e-4</td>
                                <td className="p-2 text-center text-black border border-gray-300">3e-3 / 1e-4</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-3 / 1e-8</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-3 / 1e-2</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-4 / 0</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-3 / 1e-4</td>
                                <td className="p-2 text-center text-black border border-gray-300">2e-3 / 1e-2</td>
                              </tr>
                              <tr className="border-b bg-green-50">
                                <td className="p-2 font-medium text-black border border-gray-300">Sophia</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-4 / 2e-1</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-4 / 5e-4</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-5 / 1e-1</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-4 / 2e-1</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-4 / 2e-1</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-5 / 1e-1</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-4 / 1e-1</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-4 / 2e-1</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-5 / 1e-1</td>
                              </tr>
                              <tr className="border-b bg-purple-100">
                                <td className="p-2 font-medium text-black border border-gray-300">AdaGrad</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-4 / 1e-4</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-4 / 1e-4</td>
                                <td className="p-2 text-center text-black border border-gray-300">2e-4 / 1e-4</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-4 / 1e-8</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-4 / 1e-8</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-4 / 1e-4</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-4 / 1e-4</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-4 / 0</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-4 / 0</td>
                              </tr>
                              <tr className="border-b bg-purple-100">
                                <td className="p-2 font-medium text-black border border-gray-300">AdaDelta</td>
                                <td className="p-2 text-center text-black border border-gray-300">2.0 / 0</td>
                                <td className="p-2 text-center text-black border border-gray-300">2.0 / 1e-8</td>
                                <td className="p-2 text-center text-black border border-gray-300">2.2 / 1e-4</td>
                                <td className="p-2 text-center text-black border border-gray-300">2.4 / 0</td>
                                <td className="p-2 text-center text-black border border-gray-300">2.2 / 0</td>
                                <td className="p-2 text-center text-black border border-gray-300">1.2 / 0</td>
                                <td className="p-2 text-center text-black border border-gray-300">1.0 / 0</td>
                                <td className="p-2 text-center text-black border border-gray-300">1.5 / 1e-4</td>
                                <td className="p-2 text-center text-black border border-gray-300">2.0 / 1e-4</td>
                              </tr>
                              <tr className="border-b bg-purple-100">
                                <td className="p-2 font-medium text-black border border-gray-300">RMSProp</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-4 / 1e-8</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-4 / 0</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-4 / 1e-4</td>
                                <td className="p-2 text-center text-black border border-gray-300">2e-3 / 1e-8</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-4 / 1e-8</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-4 / 1e-8</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-4 / 0</td>
                                <td className="p-2 text-center text-black border border-gray-300">5e-4 / 0</td>
                                <td className="p-2 text-center text-black border border-gray-300">1e-4 / 0</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* LLM Benchmark Content */}
        {selectedSuite === 'llm' && (
          <div className="space-y-8">
            
            {/* C4 Benchmark */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div 
                className="bg-gradient-to-r from-indigo-600 to-indigo-700 px-6 py-4 cursor-pointer"
                onClick={() => toggleTable('c4')}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Brain className="w-6 h-6 text-white mr-3" />
                    <div>
                      <h3 className="text-xl font-semibold text-white">C4 Benchmark</h3>
                      <p className="text-indigo-100 text-sm">LLaMA pre-training comparison on C4 dataset (60M-1B parameters)</p>
                    </div>
                  </div>
                  {expandedTable === 'c4' ? 
                    <ChevronUp className="w-6 h-6 text-white" /> : 
                    <ChevronDown className="w-6 h-6 text-white" />
                  }
                </div>
              </div>
              
              {expandedTable === 'c4' && (
                <div className="p-6">
                  <div className="mb-4 text-sm text-gray-600">
                    <p><strong>Setup:</strong> LLaMA pre-training on C4 dataset with model sizes from 60M to 1B parameters. Validation perplexity (PPL)↓, GPU memory (Mem.)↓, and optimizer step time (s)↓ are reported. Lower is better for all metrics.</p>
                    <p className="mt-2"><strong>Our Methods (SAC):</strong> <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">Purple background</span> indicates our proposed methods.</p>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs border border-gray-200">
                      <thead>
                        <tr className="bg-gray-50 border-b">
                          <th className="text-left p-2 font-semibold text-black border-r">Optimizer</th>
                          <th className="text-center p-2 font-semibold text-black border-r">Venue</th>
                          <th className="text-center p-2 font-semibold text-black border-r">Betas</th>
                          <th className="text-center p-2 font-semibold text-black border-r">Eps.</th>
                          <th className="text-center p-2 font-semibold text-black border-r bg-blue-50">60M PPL</th>
                          <th className="text-center p-2 font-semibold text-black border-r bg-blue-50">60M Mem(G)</th>
                          <th className="text-center p-2 font-semibold text-black border-r bg-blue-50">60M Time(s)</th>
                          <th className="text-center p-2 font-semibold text-black border-r bg-green-50">130M PPL</th>
                          <th className="text-center p-2 font-semibold text-black border-r bg-green-50">130M Mem(G)</th>
                          <th className="text-center p-2 font-semibold text-black border-r bg-green-50">130M Time(s)</th>
                          <th className="text-center p-2 font-semibold text-black border-r bg-yellow-50">350M PPL</th>
                          <th className="text-center p-2 font-semibold text-black border-r bg-yellow-50">350M Mem(G)</th>
                          <th className="text-center p-2 font-semibold text-black border-r bg-yellow-50">350M Time(s)</th>
                          <th className="text-center p-2 font-semibold text-black border-r bg-red-50">1B PPL</th>
                          <th className="text-center p-2 font-semibold text-black border-r bg-red-50">1B Mem(G)</th>
                          <th className="text-center p-2 font-semibold text-black bg-red-50">1B Time(s)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b bg-gray-100">
                          <td className="p-2 font-medium text-black border-r">AdamW</td>
                          <td className="p-2 text-center text-black border-r text-xs">ICLR'19</td>
                          <td className="p-2 text-center text-black border-r text-xs">(0.9, 0.99)</td>
                          <td className="p-2 text-center text-black border-r text-xs">1e-8</td>
                          <td className="p-2 text-center text-black border-r">29.19</td>
                          <td className="p-2 text-center text-black border-r">0.25</td>
                          <td className="p-2 text-center text-black border-r">0.0018</td>
                          <td className="p-2 text-center text-black border-r">22.64</td>
                          <td className="p-2 text-center text-black border-r">0.55</td>
                          <td className="p-2 text-center text-black border-r">0.0023</td>
                          <td className="p-2 text-center text-black border-r">16.97</td>
                          <td className="p-2 text-center text-black border-r">1.43</td>
                          <td className="p-2 text-center text-black border-r">0.0045</td>
                          <td className="p-2 text-center text-black border-r">14.40</td>
                          <td className="p-2 text-center text-black border-r">5.11</td>
                          <td className="p-2 text-center text-black">0.0762</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-medium text-black border-r">AdaBelief</td>
                          <td className="p-2 text-center text-black border-r text-xs">NeurIPS'19</td>
                          <td className="p-2 text-center text-black border-r text-xs">(0.9, 0.999)</td>
                          <td className="p-2 text-center text-black border-r text-xs">1e-12</td>
                          <td className="p-2 text-center text-black border-r">29.49</td>
                          <td className="p-2 text-center text-black border-r">0.46</td>
                          <td className="p-2 text-center text-black border-r">0.0099</td>
                          <td className="p-2 text-center text-black border-r">22.92</td>
                          <td className="p-2 text-center text-black border-r">1.04</td>
                          <td className="p-2 text-center text-black border-r">0.0156</td>
                          <td className="p-2 text-center text-black border-r">17.46</td>
                          <td className="p-2 text-center text-black border-r">2.80</td>
                          <td className="p-2 text-center text-black border-r">0.0614</td>
                          <td className="p-2 text-center text-black border-r">16.85</td>
                          <td className="p-2 text-center text-black border-r">10.1</td>
                          <td className="p-2 text-center text-black">0.2448</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-medium text-black border-r">AdamP</td>
                          <td className="p-2 text-center text-black border-r text-xs">ICLR'21</td>
                          <td className="p-2 text-center text-black border-r text-xs">(0.9, 0.98)</td>
                          <td className="p-2 text-center text-black border-r text-xs">1e-8</td>
                          <td className="p-2 text-center text-black border-r">29.34</td>
                          <td className="p-2 text-center text-black border-r">0.25</td>
                          <td className="p-2 text-center text-black border-r">0.0263</td>
                          <td className="p-2 text-center text-black border-r">22.52</td>
                          <td className="p-2 text-center text-black border-r">0.55</td>
                          <td className="p-2 text-center text-black border-r">0.0397</td>
                          <td className="p-2 text-center text-black border-r">17.04</td>
                          <td className="p-2 text-center text-black border-r">1.43</td>
                          <td className="p-2 text-center text-black border-r">0.1139</td>
                          <td className="p-2 text-center text-black border-r">14.41</td>
                          <td className="p-2 text-center text-black border-r">5.11</td>
                          <td className="p-2 text-center text-black">0.2836</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-medium text-black border-r">LAMB</td>
                          <td className="p-2 text-center text-black border-r text-xs">ICLR'20</td>
                          <td className="p-2 text-center text-black border-r text-xs">(0.9, 0.99)</td>
                          <td className="p-2 text-center text-black border-r text-xs">1e-6</td>
                          <td className="p-2 text-center text-black border-r">29.08</td>
                          <td className="p-2 text-center text-black border-r">0.25</td>
                          <td className="p-2 text-center text-black border-r">0.0168</td>
                          <td className="p-2 text-center text-black border-r">22.57</td>
                          <td className="p-2 text-center text-black border-r">0.55</td>
                          <td className="p-2 text-center text-black border-r">0.0274</td>
                          <td className="p-2 text-center text-black border-r">16.89</td>
                          <td className="p-2 text-center text-black border-r">1.43</td>
                          <td className="p-2 text-center text-black border-r">0.0897</td>
                          <td className="p-2 text-center text-black border-r">15.32</td>
                          <td className="p-2 text-center text-black border-r">5.11</td>
                          <td className="p-2 text-center text-black">0.2269</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-medium text-black border-r">NAdam</td>
                          <td className="p-2 text-center text-black border-r text-xs">ICLR'18</td>
                          <td className="p-2 text-center text-black border-r text-xs">(0.9, 0.99)</td>
                          <td className="p-2 text-center text-black border-r text-xs">1e-8</td>
                          <td className="p-2 text-center text-black border-r">32.75</td>
                          <td className="p-2 text-center text-black border-r">0.25</td>
                          <td className="p-2 text-center text-black border-r">0.0029</td>
                          <td className="p-2 text-center text-black border-r">24.04</td>
                          <td className="p-2 text-center text-black border-r">0.55</td>
                          <td className="p-2 text-center text-black border-r">0.0040</td>
                          <td className="p-2 text-center text-black border-r">17.57</td>
                          <td className="p-2 text-center text-black border-r">1.43</td>
                          <td className="p-2 text-center text-black border-r">0.0065</td>
                          <td className="p-2 text-center text-black border-r">16.48</td>
                          <td className="p-2 text-center text-black border-r">5.11</td>
                          <td className="p-2 text-center text-black">0.0879</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-medium text-black border-r">RAdam</td>
                          <td className="p-2 text-center text-black border-r text-xs">ICLR'20</td>
                          <td className="p-2 text-center text-black border-r text-xs">(0.9, 0.99)</td>
                          <td className="p-2 text-center text-black border-r text-xs">1e-8</td>
                          <td className="p-2 text-center text-black border-r">29.23</td>
                          <td className="p-2 text-center text-black border-r">0.25</td>
                          <td className="p-2 text-center text-black border-r">0.0024</td>
                          <td className="p-2 text-center text-black border-r">22.67</td>
                          <td className="p-2 text-center text-black border-r">0.55</td>
                          <td className="p-2 text-center text-black border-r">0.0031</td>
                          <td className="p-2 text-center text-black border-r">16.94</td>
                          <td className="p-2 text-center text-black border-r">1.43</td>
                          <td className="p-2 text-center text-black border-r">0.0053</td>
                          <td className="p-2 text-center text-black border-r">14.30</td>
                          <td className="p-2 text-center text-black border-r">5.11</td>
                          <td className="p-2 text-center text-black">0.0994</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-medium text-black border-r">Adan</td>
                          <td className="p-2 text-center text-black border-r text-xs">TPAMI'23</td>
                          <td className="p-2 text-center text-black border-r text-xs">(0.9, 0.92, 0.99)</td>
                          <td className="p-2 text-center text-black border-r text-xs">1e-8</td>
                          <td className="p-2 text-center text-black border-r">29.40</td>
                          <td className="p-2 text-center text-black border-r">0.46</td>
                          <td className="p-2 text-center text-black border-r">0.0042</td>
                          <td className="p-2 text-center text-black border-r">22.30</td>
                          <td className="p-2 text-center text-black border-r">1.04</td>
                          <td className="p-2 text-center text-black border-r">0.0041</td>
                          <td className="p-2 text-center text-black border-r">17.01</td>
                          <td className="p-2 text-center text-black border-r">2.80</td>
                          <td className="p-2 text-center text-black border-r">0.0158</td>
                          <td className="p-2 text-center text-black border-r">14.70</td>
                          <td className="p-2 text-center text-black border-r">10.1</td>
                          <td className="p-2 text-center text-black">0.1787</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-medium text-black border-r">Prodigy</td>
                          <td className="p-2 text-center text-black border-r text-xs">ICML'23</td>
                          <td className="p-2 text-center text-black border-r text-xs">(0.9, 0.95)</td>
                          <td className="p-2 text-center text-black border-r text-xs">1e-8</td>
                          <td className="p-2 text-center text-black border-r">32.33</td>
                          <td className="p-2 text-center text-black border-r">0.46</td>
                          <td className="p-2 text-center text-black border-r">0.0141</td>
                          <td className="p-2 text-center text-black border-r">29.56</td>
                          <td className="p-2 text-center text-black border-r">1.04</td>
                          <td className="p-2 text-center text-black border-r">0.0257</td>
                          <td className="p-2 text-center text-black border-r">17.96</td>
                          <td className="p-2 text-center text-black border-r">2.80</td>
                          <td className="p-2 text-center text-black border-r">0.0814</td>
                          <td className="p-2 text-center text-black border-r">14.94</td>
                          <td className="p-2 text-center text-black border-r">10.1</td>
                          <td className="p-2 text-center text-black">0.2298</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-medium text-black border-r">MARS+AdamW</td>
                          <td className="p-2 text-center text-black border-r text-xs">ICML'25</td>
                          <td className="p-2 text-center text-black border-r text-xs">(0.9, 0.99)</td>
                          <td className="p-2 text-center text-black border-r text-xs">1e-8</td>
                          <td className="p-2 text-center text-black border-r">29.10</td>
                          <td className="p-2 text-center text-black border-r">0.32</td>
                          <td className="p-2 text-center text-black border-r">0.0147</td>
                          <td className="p-2 text-center text-black border-r">22.26</td>
                          <td className="p-2 text-center text-black border-r">0.75</td>
                          <td className="p-2 text-center text-black border-r">0.0290</td>
                          <td className="p-2 text-center text-black border-r">16.65</td>
                          <td className="p-2 text-center text-black border-r">2.06</td>
                          <td className="p-2 text-center text-black border-r">0.0804</td>
                          <td className="p-2 text-center text-black border-r">14.76</td>
                          <td className="p-2 text-center text-black border-r">7.48</td>
                          <td className="p-2 text-center text-black">0.2333</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-medium text-black border-r">SGG+AdamW</td>
                          <td className="p-2 text-center text-black border-r text-xs">ACL'25</td>
                          <td className="p-2 text-center text-black border-r text-xs">(0.9, 0.99)</td>
                          <td className="p-2 text-center text-black border-r text-xs">1e-8</td>
                          <td className="p-2 text-center text-black border-r">29.98</td>
                          <td className="p-2 text-center text-black border-r">0.46</td>
                          <td className="p-2 text-center text-black border-r">0.0392</td>
                          <td className="p-2 text-center text-black border-r">22.13</td>
                          <td className="p-2 text-center text-black border-r">1.04</td>
                          <td className="p-2 text-center text-black border-r">0.0631</td>
                          <td className="p-2 text-center text-black border-r">16.97</td>
                          <td className="p-2 text-center text-black border-r">1.43</td>
                          <td className="p-2 text-center text-black border-r">0.0714</td>
                          <td className="p-2 text-center text-black border-r">14.34</td>
                          <td className="p-2 text-center text-black border-r">4.77</td>
                          <td className="p-2 text-center text-black">0.3526</td>
                        </tr>
                        <tr className="border-b bg-purple-100">
                          <td className="p-2 font-bold text-black border-r">SAC+AdamW</td>
                          <td className="p-2 text-center text-black border-r text-xs font-bold">Ours</td>
                          <td className="p-2 text-center text-black border-r text-xs">(0.9, 0.99)</td>
                          <td className="p-2 text-center text-black border-r text-xs">1e-8</td>
                          <td className="p-2 text-center text-green-600 font-bold border-r">28.63</td>
                          <td className="p-2 text-center text-black border-r">0.25</td>
                          <td className="p-2 text-center text-black border-r">0.0169</td>
                          <td className="p-2 text-center text-green-600 font-bold border-r">21.85</td>
                          <td className="p-2 text-center text-black border-r">0.55</td>
                          <td className="p-2 text-center text-black border-r">0.0213</td>
                          <td className="p-2 text-center text-green-600 font-bold border-r">16.16</td>
                          <td className="p-2 text-center text-black border-r">1.43</td>
                          <td className="p-2 text-center text-black border-r">0.0401</td>
                          <td className="p-2 text-center text-green-600 font-bold border-r">13.58</td>
                          <td className="p-2 text-center text-black border-r">5.11</td>
                          <td className="p-2 text-center text-black">0.1089</td>
                        </tr>
                        <tr className="border-b bg-gray-200">
                          <td className="p-2 font-medium text-black border-r">Δ Gains</td>
                          <td className="p-2 text-center text-black border-r text-xs">-</td>
                          <td className="p-2 text-center text-black border-r text-xs">-</td>
                          <td className="p-2 text-center text-black border-r text-xs">-</td>
                          <td className="p-2 text-center text-green-600 font-semibold border-r">-0.56</td>
                          <td className="p-2 text-center text-gray-500 border-r">+0</td>
                          <td className="p-2 text-center text-red-600 border-r">+0.0152</td>
                          <td className="p-2 text-center text-green-600 font-semibold border-r">-0.79</td>
                          <td className="p-2 text-center text-gray-500 border-r">+0</td>
                          <td className="p-2 text-center text-red-600 border-r">+0.0190</td>
                          <td className="p-2 text-center text-green-600 font-semibold border-r">-0.81</td>
                          <td className="p-2 text-center text-gray-500 border-r">+0</td>
                          <td className="p-2 text-center text-red-600 border-r">+0.0363</td>
                          <td className="p-2 text-center text-green-600 font-semibold border-r">-0.82</td>
                          <td className="p-2 text-center text-gray-500 border-r">+0</td>
                          <td className="p-2 text-center text-red-600">+0.0329</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-medium text-black border-r">Adam8bit</td>
                          <td className="p-2 text-center text-black border-r text-xs">ICLR'22</td>
                          <td className="p-2 text-center text-black border-r text-xs">(0.9, 0.99)</td>
                          <td className="p-2 text-center text-black border-r text-xs">1e-8</td>
                          <td className="p-2 text-center text-black border-r">29.47</td>
                          <td className="p-2 text-center text-black border-r">0.14</td>
                          <td className="p-2 text-center text-black border-r">0.0091</td>
                          <td className="p-2 text-center text-black border-r">22.74</td>
                          <td className="p-2 text-center text-black border-r">0.30</td>
                          <td className="p-2 text-center text-black border-r">0.0189</td>
                          <td className="p-2 text-center text-black border-r">17.35</td>
                          <td className="p-2 text-center text-black border-r">0.76</td>
                          <td className="p-2 text-center text-black border-r">0.0652</td>
                          <td className="p-2 text-center text-black border-r">14.49</td>
                          <td className="p-2 text-center text-black border-r">2.66</td>
                          <td className="p-2 text-center text-black">0.2286</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-medium text-black border-r">Adam-mini</td>
                          <td className="p-2 text-center text-black border-r text-xs">ICLR'25</td>
                          <td className="p-2 text-center text-black border-r text-xs">(0.9, 0.99)</td>
                          <td className="p-2 text-center text-black border-r text-xs">1e-8</td>
                          <td className="p-2 text-center text-black border-r">29.63</td>
                          <td className="p-2 text-center text-black border-r">0.14</td>
                          <td className="p-2 text-center text-black border-r">0.0106</td>
                          <td className="p-2 text-center text-black border-r">23.08</td>
                          <td className="p-2 text-center text-black border-r">0.30</td>
                          <td className="p-2 text-center text-black border-r">0.0152</td>
                          <td className="p-2 text-center text-black border-r">19.25</td>
                          <td className="p-2 text-center text-black border-r">0.75</td>
                          <td className="p-2 text-center text-black border-r">0.0599</td>
                          <td className="p-2 text-center text-black border-r">16.44</td>
                          <td className="p-2 text-center text-black border-r">2.62</td>
                          <td className="p-2 text-center text-black">0.1868</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-medium text-black border-r">AdaFactor</td>
                          <td className="p-2 text-center text-black border-r text-xs">ICML'18</td>
                          <td className="p-2 text-center text-black border-r text-xs">(0.9,)</td>
                          <td className="p-2 text-center text-black border-r text-xs">1e-30</td>
                          <td className="p-2 text-center text-green-600 font-bold border-r">29.07</td>
                          <td className="p-2 text-center text-black border-r">0.24</td>
                          <td className="p-2 text-center text-black border-r">0.0059</td>
                          <td className="p-2 text-center text-black border-r">22.38</td>
                          <td className="p-2 text-center text-black border-r">0.61</td>
                          <td className="p-2 text-center text-black border-r">0.0082</td>
                          <td className="p-2 text-center text-black border-r">16.96</td>
                          <td className="p-2 text-center text-black border-r">1.53</td>
                          <td className="p-2 text-center text-black border-r">0.0447</td>
                          <td className="p-2 text-center text-black border-r">16.25</td>
                          <td className="p-2 text-center text-black border-r">6.65</td>
                          <td className="p-2 text-center text-black">0.1725</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-medium text-black border-r">CAME</td>
                          <td className="p-2 text-center text-black border-r text-xs">ACL'23</td>
                          <td className="p-2 text-center text-black border-r text-xs">(0.9, 0.98)</td>
                          <td className="p-2 text-center text-black border-r text-xs">1e-6</td>
                          <td className="p-2 text-center text-black border-r">29.26</td>
                          <td className="p-2 text-center text-black border-r">0.18</td>
                          <td className="p-2 text-center text-black border-r">0.0068</td>
                          <td className="p-2 text-center text-black border-r">22.55</td>
                          <td className="p-2 text-center text-black border-r">0.38</td>
                          <td className="p-2 text-center text-black border-r">0.0084</td>
                          <td className="p-2 text-center text-black border-r">16.84</td>
                          <td className="p-2 text-center text-black border-r">1.08</td>
                          <td className="p-2 text-center text-black border-r">0.0451</td>
                          <td className="p-2 text-center text-black border-r">15.76</td>
                          <td className="p-2 text-center text-black border-r">3.83</td>
                          <td className="p-2 text-center text-black">0.1794</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-medium text-black border-r">APOLLO</td>
                          <td className="p-2 text-center text-black border-r text-xs">MLSys'25</td>
                          <td className="p-2 text-center text-black border-r text-xs">(0.9, 0.99)</td>
                          <td className="p-2 text-center text-black border-r text-xs">1e-6</td>
                          <td className="p-2 text-center text-black border-r">29.82</td>
                          <td className="p-2 text-center text-black border-r">0.24</td>
                          <td className="p-2 text-center text-black border-r">0.0061</td>
                          <td className="p-2 text-center text-green-600 font-bold border-r">22.18</td>
                          <td className="p-2 text-center text-black border-r">0.52</td>
                          <td className="p-2 text-center text-black border-r">0.0090</td>
                          <td className="p-2 text-center text-green-600 font-bold border-r">16.54</td>
                          <td className="p-2 text-center text-black border-r">1.22</td>
                          <td className="p-2 text-center text-black border-r">0.0453</td>
                          <td className="p-2 text-center text-green-600 font-bold border-r">13.91</td>
                          <td className="p-2 text-center text-black border-r">4.38</td>
                          <td className="p-2 text-center text-black">0.1809</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-medium text-black border-r">Lion</td>
                          <td className="p-2 text-center text-black border-r text-xs">arXiv'23</td>
                          <td className="p-2 text-center text-black border-r text-xs">(0.9, 0.98)</td>
                          <td className="p-2 text-center text-black border-r text-xs">-</td>
                          <td className="p-2 text-center text-black border-r">34.80</td>
                          <td className="p-2 text-center text-black border-r">0.14</td>
                          <td className="p-2 text-center text-black border-r">0.0049</td>
                          <td className="p-2 text-center text-black border-r">24.95</td>
                          <td className="p-2 text-center text-black border-r">0.30</td>
                          <td className="p-2 text-center text-black border-r">0.0057</td>
                          <td className="p-2 text-center text-black border-r">18.84</td>
                          <td className="p-2 text-center text-black border-r">0.75</td>
                          <td className="p-2 text-center text-black border-r">0.0400</td>
                          <td className="p-2 text-center text-black border-r">17.01</td>
                          <td className="p-2 text-center text-black border-r">2.62</td>
                          <td className="p-2 text-center text-black">0.1684</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-medium text-black border-r">Sophia</td>
                          <td className="p-2 text-center text-black border-r text-xs">arXiv'23</td>
                          <td className="p-2 text-center text-black border-r text-xs">(0.9, 0.99)</td>
                          <td className="p-2 text-center text-black border-r text-xs">1e-8</td>
                          <td className="p-2 text-center text-black border-r">35.14</td>
                          <td className="p-2 text-center text-black border-r">0.25</td>
                          <td className="p-2 text-center text-black border-r">0.0080</td>
                          <td className="p-2 text-center text-black border-r">25.09</td>
                          <td className="p-2 text-center text-black border-r">0.55</td>
                          <td className="p-2 text-center text-black border-r">0.0105</td>
                          <td className="p-2 text-center text-black border-r">18.42</td>
                          <td className="p-2 text-center text-black border-r">1.43</td>
                          <td className="p-2 text-center text-black border-r">0.0478</td>
                          <td className="p-2 text-center text-black border-r">17.62</td>
                          <td className="p-2 text-center text-black border-r">5.11</td>
                          <td className="p-2 text-center text-black">0.1843</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-medium text-black border-r">MARS+Lion</td>
                          <td className="p-2 text-center text-black border-r text-xs">ICML'25</td>
                          <td className="p-2 text-center text-black border-r text-xs">(0.9, 0.98)</td>
                          <td className="p-2 text-center text-black border-r text-xs">1e-8</td>
                          <td className="p-2 text-center text-black border-r">31.50</td>
                          <td className="p-2 text-center text-black border-r">0.32</td>
                          <td className="p-2 text-center text-black border-r">0.0139</td>
                          <td className="p-2 text-center text-black border-r">25.02</td>
                          <td className="p-2 text-center text-black border-r">0.75</td>
                          <td className="p-2 text-center text-black border-r">0.0247</td>
                          <td className="p-2 text-center text-black border-r">18.36</td>
                          <td className="p-2 text-center text-black border-r">2.06</td>
                          <td className="p-2 text-center text-black border-r">0.0753</td>
                          <td className="p-2 text-center text-black border-r">16.94</td>
                          <td className="p-2 text-center text-black border-r">7.48</td>
                          <td className="p-2 text-center text-black">0.1804</td>
                        </tr>
                        <tr className="border-b bg-purple-100">
                          <td className="p-2 font-bold text-black border-r">SAC+Adam-mini</td>
                          <td className="p-2 text-center text-black border-r text-xs font-bold">Ours</td>
                          <td className="p-2 text-center text-black border-r text-xs">(0.9, 0.99)</td>
                          <td className="p-2 text-center text-black border-r text-xs">1e-8</td>
                          <td className="p-2 text-center text-black border-r">29.49</td>
                          <td className="p-2 text-center text-black border-r">0.14</td>
                          <td className="p-2 text-center text-black border-r">0.0131</td>
                          <td className="p-2 text-center text-black border-r">22.62</td>
                          <td className="p-2 text-center text-black border-r">0.30</td>
                          <td className="p-2 text-center text-black border-r">0.0157</td>
                          <td className="p-2 text-center text-black border-r">16.66</td>
                          <td className="p-2 text-center text-black border-r">0.75</td>
                          <td className="p-2 text-center text-black border-r">0.0605</td>
                          <td className="p-2 text-center text-black border-r">14.23</td>
                          <td className="p-2 text-center text-black border-r">2.62</td>
                          <td className="p-2 text-center text-black">0.1873</td>
                        </tr>
                        <tr className="border-b bg-gray-200">
                          <td className="p-2 font-medium text-black border-r">Δ Gains</td>
                          <td className="p-2 text-center text-black border-r text-xs">-</td>
                          <td className="p-2 text-center text-black border-r text-xs">-</td>
                          <td className="p-2 text-center text-black border-r text-xs">-</td>
                          <td className="p-2 text-center text-green-600 font-semibold border-r">-0.14</td>
                          <td className="p-2 text-center text-gray-500 border-r">+0</td>
                          <td className="p-2 text-center text-red-600 border-r">+0.0025</td>
                          <td className="p-2 text-center text-green-600 font-semibold border-r">-0.46</td>
                          <td className="p-2 text-center text-gray-500 border-r">+0</td>
                          <td className="p-2 text-center text-red-600 border-r">+0.0005</td>
                          <td className="p-2 text-center text-green-600 font-semibold border-r">-2.59</td>
                          <td className="p-2 text-center text-gray-500 border-r">+0</td>
                          <td className="p-2 text-center text-red-600 border-r">+0.0006</td>
                          <td className="p-2 text-center text-green-600 font-semibold border-r">-2.21</td>
                          <td className="p-2 text-center text-gray-500 border-r">+0</td>
                          <td className="p-2 text-center text-red-600">+0.0005</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-medium text-black border-r">Shampoo</td>
                          <td className="p-2 text-center text-black border-r text-xs">arXiv'18</td>
                          <td className="p-2 text-center text-black border-r text-xs">(0.9, 0.999)</td>
                          <td className="p-2 text-center text-black border-r text-xs">1e-8</td>
                          <td className="p-2 text-center text-black border-r">29.30</td>
                          <td className="p-2 text-center text-black border-r">0.18</td>
                          <td className="p-2 text-center text-black border-r">0.0364</td>
                          <td className="p-2 text-center text-black border-r">22.01</td>
                          <td className="p-2 text-center text-black border-r">0.35</td>
                          <td className="p-2 text-center text-black border-r">0.0526</td>
                          <td className="p-2 text-center text-black border-r">16.71</td>
                          <td className="p-2 text-center text-black border-r">1.37</td>
                          <td className="p-2 text-center text-black border-r">0.1465</td>
                          <td className="p-2 text-center text-black border-r">14.34</td>
                          <td className="p-2 text-center text-black border-r">4.77</td>
                          <td className="p-2 text-center text-black">0.8762</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-medium text-black border-r">Muon (kimi)</td>
                          <td className="p-2 text-center text-black border-r text-xs">arXiv'25</td>
                          <td className="p-2 text-center text-black border-r text-xs">(0.9, 0.95)</td>
                          <td className="p-2 text-center text-black border-r text-xs">1e-8</td>
                          <td className="p-2 text-center text-black border-r">28.91</td>
                          <td className="p-2 text-center text-black border-r">0.14</td>
                          <td className="p-2 text-center text-black border-r">0.0336</td>
                          <td className="p-2 text-center text-black border-r">22.19</td>
                          <td className="p-2 text-center text-black border-r">0.30</td>
                          <td className="p-2 text-center text-black border-r">0.0486</td>
                          <td className="p-2 text-center text-black border-r">16.72</td>
                          <td className="p-2 text-center text-black border-r">0.75</td>
                          <td className="p-2 text-center text-black border-r">0.1370</td>
                          <td className="p-2 text-center text-black border-r">14.52</td>
                          <td className="p-2 text-center text-black border-r">2.62</td>
                          <td className="p-2 text-center text-black">0.8870</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-medium text-black border-r">SOAP</td>
                          <td className="p-2 text-center text-black border-r text-xs">arXiv'24</td>
                          <td className="p-2 text-center text-black border-r text-xs">(0.9, 0.95)</td>
                          <td className="p-2 text-center text-black border-r text-xs">1e-8</td>
                          <td className="p-2 text-center text-green-600 font-bold border-r">28.60</td>
                          <td className="p-2 text-center text-black border-r">0.17</td>
                          <td className="p-2 text-center text-black border-r">0.0747</td>
                          <td className="p-2 text-center text-black border-r">22.15</td>
                          <td className="p-2 text-center text-black border-r">0.34</td>
                          <td className="p-2 text-center text-black border-r">0.1028</td>
                          <td className="p-2 text-center text-black border-r">16.79</td>
                          <td className="p-2 text-center text-black border-r">1.35</td>
                          <td className="p-2 text-center text-black border-r">0.1943</td>
                          <td className="p-2 text-center text-black border-r">14.58</td>
                          <td className="p-2 text-center text-black border-r">4.72</td>
                          <td className="p-2 text-center text-black">0.9205</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-medium text-black border-r">MARS+Shampoo</td>
                          <td className="p-2 text-center text-black border-r text-xs">ICML'25</td>
                          <td className="p-2 text-center text-black border-r text-xs">(0.9, 0.99)</td>
                          <td className="p-2 text-center text-black border-r text-xs">1e-8</td>
                          <td className="p-2 text-center text-black border-r">29.13</td>
                          <td className="p-2 text-center text-black border-r">0.32</td>
                          <td className="p-2 text-center text-black border-r">0.0491</td>
                          <td className="p-2 text-center text-green-600 font-bold border-r">21.96</td>
                          <td className="p-2 text-center text-black border-r">0.75</td>
                          <td className="p-2 text-center text-black border-r">0.0768</td>
                          <td className="p-2 text-center text-green-600 font-bold border-r">16.49</td>
                          <td className="p-2 text-center text-black border-r">2.06</td>
                          <td className="p-2 text-center text-black border-r">0.1537</td>
                          <td className="p-2 text-center text-green-600 font-bold border-r">13.75</td>
                          <td className="p-2 text-center text-black border-r">7.48</td>
                          <td className="p-2 text-center text-black">0.8823</td>
                        </tr>
                        <tr className="border-b bg-purple-100">
                          <td className="p-2 font-bold text-black border-r">SAC+Shampoo</td>
                          <td className="p-2 text-center text-black border-r text-xs font-bold">Ours</td>
                          <td className="p-2 text-center text-black border-r text-xs">(0.9, 0.999)</td>
                          <td className="p-2 text-center text-black border-r text-xs">1e-8</td>
                          <td className="p-2 text-center text-black border-r">29.22</td>
                          <td className="p-2 text-center text-black border-r">0.18</td>
                          <td className="p-2 text-center text-black border-r">0.0376</td>
                          <td className="p-2 text-center text-green-600 font-bold border-r">21.96</td>
                          <td className="p-2 text-center text-black border-r">0.35</td>
                          <td className="p-2 text-center text-black border-r">0.0541</td>
                          <td className="p-2 text-center text-black border-r">16.61</td>
                          <td className="p-2 text-center text-black border-r">1.37</td>
                          <td className="p-2 text-center text-black border-r">0.1481</td>
                          <td className="p-2 text-center text-black border-r">14.07</td>
                          <td className="p-2 text-center text-black border-r">4.77</td>
                          <td className="p-2 text-center text-black">0.8785</td>
                        </tr>
                        <tr className="border-b bg-gray-200">
                          <td className="p-2 font-medium text-black border-r">Δ Gains</td>
                          <td className="p-2 text-center text-black border-r text-xs">-</td>
                          <td className="p-2 text-center text-black border-r text-xs">-</td>
                          <td className="p-2 text-center text-black border-r text-xs">-</td>
                          <td className="p-2 text-center text-green-600 font-semibold border-r">-0.08</td>
                          <td className="p-2 text-center text-gray-500 border-r">+0</td>
                          <td className="p-2 text-center text-red-600 border-r">+0.0012</td>
                          <td className="p-2 text-center text-green-600 font-semibold border-r">-0.05</td>
                          <td className="p-2 text-center text-gray-500 border-r">+0</td>
                          <td className="p-2 text-center text-red-600 border-r">+0.0015</td>
                          <td className="p-2 text-center text-green-600 font-semibold border-r">-0.09</td>
                          <td className="p-2 text-center text-gray-500 border-r">+0</td>
                          <td className="p-2 text-center text-red-600 border-r">+0.0016</td>
                          <td className="p-2 text-center text-green-600 font-semibold border-r">-0.27</td>
                          <td className="p-2 text-center text-gray-500 border-r">+0</td>
                          <td className="p-2 text-center text-red-600">+0.0023</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Research Links */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Explore Our Research</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Dive deeper into the backbone-optimizer coupling bias phenomenon and discover insights that can improve your model training.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://arxiv.org/abs/2410.06373v1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200"
            >
              <FileText className="w-5 h-5 mr-2" />
              Read Paper
            </a>
            <a
              href="https://github.com/tianshijing/ScalingOpt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              <Cpu className="w-5 h-5 mr-2" />
              View Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// 在这里添加更多的优化器数据行...
// 这个文件已经创建了基础结构，现在可以通过编辑工具添加完整的数据
