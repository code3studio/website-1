---
title: PyIq - AI-powered Solana framework for autonomous crypto trading.
titleTemplate: ':title'
---

# PyIq AI

***symbolizing intelligence and precision in crypto trading*** - is a cutting-edge, AI-powered trading system designed for speed, efficiency, and seamless integration.
It operates on Solana's blockchain infrastructure and utilizes advanced AI models to analyze data and execute trades across various platforms, including Jupiter Protocol and Helius APIs, ensuring robust and data-driven trading strategies.

Here's the breakdown

```ts twoslash
PyIq_AI/
├── src/
│   ├── agents.py           # AI agent implementations
│   ├── backtester.py       # Strategy testing framework
│   └── tools.py            # Market analysis tools
├── tests/
│   └── test_agents.py      # Unit tests
└── config/
    └── .env.example        # Configuration template
```

## Quick Start

Just run this:

::: code-group

```sh [git]
git clone https://github.com/arhansuba/crypto-hedge-fund.git
```

```sh [.py env]
python -m venv venv
```

```sh [.py]
pip install -r requirements.txt
```

```sh [.env]
cp .env.example .env
```

:::

## Features

- **AI** 🧠 - Combines advanced machine learning models with on-chain data for precise and intelligent trading decisions.
- **Solana** ◎ - Leverages Solana's high-speed blockchain and low fees to ensure seamless trade execution across the network.
- **Analytics** 📊 - Provides real-time token pricing, market depth analysis, and sentiment evaluation for smarter trading strategies.
- **Risk Management** 🛡 - Implements strict position limits, liquidity assessments, and real-time risk evaluations to safeguard your capital.
- **Runs Locally** 💻 - Fully operational on your local machine, ensuring secure and private execution of all trading strategies.

## Use-cases

**PyIq AI** is an advanced AI-powered crypto trading system designed to optimize decision-making and trade execution. By integrating Solana's blockchain infrastructure and AI agents, PyIq can handle diverse and complex use cases.  

Here are some examples of how PyIq can be utilized:

- Automated cryptocurrency trading
- Real-time market analysis and predictions
- Portfolio management and optimization
- Risk assessment and mitigation
- Backtesting trading strategies
- On-chain data visualization and reporting


## Who is using PyIq AI?

| Use Case                                                          | Platform               | What for?                                                                                 |
| ------------------------------------------------------------------ | ---------------------- | ----------------------------------------------------------------------------------------- |
| **Automated Trading**                                             | Solana Blockchain      | PyIq is used for executing data-driven trades on Solana tokens with AI agents.         |
| **Market Data Analysis**                                          | Jupiter Protocol       | Real-time token pricing, order book analysis, and historical data for trade optimization. |
| **Risk Management**                                               | Helius API             | Assess liquidity, monitor transactions, and implement safeguards for capital protection.  |
| **Portfolio Optimization**                                        | Local Development      | PyIq helps design, test, and refine diversified trading strategies using AI.           |
| **Backtesting**                                                   | Python Environment     | Testing trading strategies against historical market data for performance evaluation.     |
| **Sentiment Analysis**                                            | On-Chain Data          | Analyzing holder patterns and sentiment metrics to identify profitable opportunities.     |

And more...

- **Institutional Trading Bots** - Manage complex trading strategies for high-frequency trades.
- **Crypto Analytics Platforms** - Provide actionable insights using AI-driven models.
- **Developer Sandboxes** - Create and test new trading tools and algorithms in a local setup.



## PyIq in 1 minute

A quick demonstration of how PyIq empowers you to set up an AI-driven crypto trading.

![Demo](/images/sc.gif)


## Lightweight

**PyIq is so efficient**. The system is designed for streamlined performance, optimizing resource usage and minimizing overhead. By focusing on modularity, PyIq only loads the components and APIs required for the trading strategy, ensuring fast and lightweight execution.

For context, the system's AI modules and data integrations are optimized for performance, allowing you to deploy an advanced trading setup without unnecessary bloat.

```
$ python src/agents.py --minify
✅ PyIq AI initialized
-------------------------
📈 Trading pairs: SOL, BONK, JUP
⚙️  Total Resources Loaded: 9.8 MiB
🔄 Real-time processing: 2.4 MiB / gzip: 1.1 MiB


With its efficient architecture, PyIq ensures a fast and scalable trading 
experience tailored to your needs! 🚀
``` 

## API and User Integrations

**PyIq connects seamlessly with multiple APIs** to empower its AI-driven trading system. These integrations enable "smarter trading with less effort" by providing real-time data, robust analytics, and comprehensive blockchain insights.

PyIq supports the following APIs out of the box:

### AI Models and Large Language Models (LLMs)
- **OpenAI API**: Leverage GPT models for advanced decision-making and sentiment analysis.
- **Anthropic API**: Access state-of-the-art AI for contextual data interpretation.
- **Groq API**: Utilize Groq AI models for high-speed processing and real-time data analytics.

### Blockchain Data and RPCs
- **Helius API**: Get transaction monitoring, token metrics, and on-chain insights.
- **Jupiter API**: Access real-time token pricing, order book depth, and price impact analysis.
- **Solana RPC URL**: Interact with the Solana blockchain for high-speed, low-cost transactions.
- **Ethereum RPC URL**: Integrate Ethereum for cross-chain capabilities and data access.

### Configuration Options
PyIq allows you to fine-tune trading parameters to match your strategy:
- **MAX_POSITION_SIZE**: Define the maximum position size per trade.
- **RISK_TOLERANCE**: Set risk limits to ensure safe trading.
- **MIN_CONFIDENCE**: Configure minimum AI confidence thresholds for decision-making.

### Example: Setting Up Helius and Jupiter APIs
With just a few lines of configuration, PyIq is ready to connect to key data sources:

```python
# Example of .env file configuration
HELIUS_API_KEY=your_helius_key
JUPITER_API_KEY=your_jupiter_key
SOLANA_RPC_URL=https://api.mainnet-beta.solana.com

# Python code
from src.agents import MarketDataAgent

agent = MarketDataAgent(helius_api_key="your_helius_key", jupiter_api_key="your_jupiter_key")
agent.gather_market_data()
```
## Conclusion

PyIq transforms crypto trading by combining AI and Solana's blockchain for fast, data-driven decisions. With seamless API integrations, advanced analytics, and robust risk management, it empowers traders of all levels with scalable, user-friendly tools to succeed in the dynamic crypto market.

Take control of your trading strategy, optimize your performance, and unlock the full potential of AI-driven crypto trading with PyIq.  
Ready to get started? [Explore PyIq here](https://github.com/PyIq-ai/trading-system) and build your intelligent trading system today!
