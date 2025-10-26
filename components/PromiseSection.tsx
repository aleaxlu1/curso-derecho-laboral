import React, { useEffect, useRef } from 'react';
import { Chart, BarController, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

Chart.register(BarController, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const PromiseSection: React.FC = () => {
    const chartRef = useRef<HTMLCanvasElement>(null);
    const chartInstance = useRef<Chart | null>(null);

    useEffect(() => {
        if (chartRef.current) {
            const ctx = chartRef.current.getContext('2d');
            if (ctx) {
                if (chartInstance.current) {
                    chartInstance.current.destroy();
                }

                chartInstance.current = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: ['Empresa SIN Código Secreto', 'Empresa CON Código Secreto'],
                        datasets: [{
                            label: 'Nivel de Riesgo de Sobrecostos y Litigios',
                            data: [100, 15],
                            backgroundColor: [
                                'rgba(220, 38, 38, 0.7)', // red-700
                                'rgba(202, 138, 4, 0.7)'   // yellow-600
                            ],
                            borderColor: [
                                'rgba(220, 38, 38, 1)',
                                'rgba(202, 138, 4, 1)'
                            ],
                            borderWidth: 2
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        indexAxis: 'y',
                        scales: {
                            x: {
                                beginAtZero: true,
                                grid: { color: 'rgba(255, 255, 255, 0.1)' },
                                ticks: {
                                    color: 'white',
                                    font: { weight: 'bold' },
                                    callback: (value) => `${value}% Riesgo`
                                }
                            },
                            y: {
                                grid: { display: false },
                                ticks: {
                                    color: 'white',
                                    font: { size: 14, weight: 'bold' }
                                }
                            }
                        },
                        plugins: {
                            legend: { display: false },
                            tooltip: {
                                enabled: true,
                                backgroundColor: '#000',
                                titleColor: '#fff',
                                bodyColor: '#fff',
                                callbacks: {
                                    label: (context) => {
                                        let label = context.dataset.label || '';
                                        if (label) {
                                            label += ': ';
                                        }
                                        if (context.parsed.x !== null) {
                                            label += `${context.parsed.x}% de Riesgo de Sanción/Litigio`;
                                        }
                                        return label;
                                    }
                                }
                            }
                        }
                    }
                });
            }
        }
        
        return () => {
             if (chartInstance.current) {
                chartInstance.current.destroy();
             }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <section id="promise" className="py-20 bg-gray-900 text-white">
            <div className="container mx-auto px-6">
                <h2 className="text-center text-4xl font-extrabold mb-16">
                    💥 La Promesa de la Jueza: Lo que Sabrá al Final
                </h2>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold text-yellow-400">Anticípese a las Decisiones Judiciales</h3>
                            <p className="mt-2 text-lg text-gray-300">Conocerá las 3 cosas que un Juez Laboral <strong>está acostumbrado a sentenciar</strong> a favor del trabajador ante un contrato temporal mal justificado.</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-yellow-400">Proteja su Rentabilidad: El Costo de la Imprecisión</h3>
                            <p className="mt-2 text-lg text-gray-300">Dominará las áreas de la nómina (Recargos 90%) donde el Juez ve errores automáticamente, garantizando que su empresa no sea condenada por fallas de cálculo.</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-yellow-400">Optimice su Documentación Interna</h3>
                            <p className="mt-2 text-lg text-gray-300">Sabrá exactamente qué tipo de prueba documental o testimonial convence a la Jueza y cuál es irrelevante para proteger su operación.</p>
                        </div>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-2xl shadow-xl">
                        <h3 className="text-xl font-bold text-white text-center mb-4">Visualización del Riesgo: Sobrecostos 2026</h3>
                        <div className="relative h-64 md:h-80 w-full max-w-lg mx-auto">
                            <canvas ref={chartRef}></canvas>
                        </div>
                        <p className="text-center text-sm text-gray-400 mt-4">
                            Este gráfico conceptual ilustra el nivel de riesgo de sobrecostos y litigios. El "Código Secreto" representa la inteligencia judicial para mitigar este riesgo.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PromiseSection;