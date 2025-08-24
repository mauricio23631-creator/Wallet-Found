import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog.jsx'
import { Wallet, CreditCard, Smartphone, Copy, Check } from 'lucide-react'
import './App.css'

// Import product images
import bullBruteImg from './assets/photo_1_2025-08-24_02-36-47.jpg'
import cryptoSearchImg from './assets/photo_2_2025-08-24_02-36-47.jpg'
import cryptoIce2Img from './assets/photo_3_2025-08-24_02-36-47.jpg'
import cryptoAppImg from './assets/photo_4_2025-08-24_02-36-47.jpg'
import bruteCryptoImg from './assets/photo_5_2025-08-24_02-36-47.jpg'
import searchBoosterImg from './assets/photo_6_2025-08-24_02-36-47.jpg'
import cryptoIce3Img from './assets/photo_7_2025-08-24_02-49-25.jpg'

function App() {
  const [copiedWallet, setCopiedWallet] = useState('')

  const products = [
    {
      id: 1,
      name: 'Bull Brute',
      price: 60,
      image: bullBruteImg,
      cryptoWallet: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh',
      description: 'Powerful crypto trading tool for aggressive market strategies'
    },
    {
      id: 2,
      name: 'Crypto Search',
      price: 70,
      image: cryptoSearchImg,
      cryptoWallet: 'bc1qw508d6qejxtdg4y5r3zarvary0c5xw7kv8f3t4',
      description: 'Advanced search engine for cryptocurrency opportunities'
    },
    {
      id: 3,
      name: 'Crypto Ice 2',
      price: 55,
      image: cryptoIce2Img,
      cryptoWallet: 'bc1qrp33g0q5c5txsp9arysrx4k6zdkfs4nce4xj0gdcccefvpysxf3qccfmv3',
      description: 'Cold storage solution with enhanced security features'
    },
    {
      id: 4,
      name: 'Crypto App',
      price: 80,
      image: cryptoAppImg,
      cryptoWallet: 'bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq',
      description: 'Complete mobile application for crypto management'
    },
    {
      id: 5,
      name: 'Brute Crypto',
      price: 50,
      image: bruteCryptoImg,
      cryptoWallet: 'bc1qc7slrfxkknqcq2jevvvkdgvrt8080852dfjewde450xdlk4ugp7szw5tk9',
      description: 'Brute force crypto mining optimization software'
    },
    {
      id: 6,
      name: 'Search Booster',
      price: 19,
      image: searchBoosterImg,
      cryptoWallet: 'bc1qw508d6qejxtdg4y5r3zarvary0c5xw7kw508d6qejxtdg4y5r3zarvary0c5xw7kw5rljs90',
      description: 'Boost your crypto search capabilities and find hidden gems'
    },
    {
      id: 7,
      name: 'Crypto Ice 3',
      price: 85,
      image: cryptoIce3Img,
      cryptoWallet: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh',
      description: 'Latest version of our premium cold storage solution'
    }
  ]

  const copyToClipboard = (wallet, productName) => {
    navigator.clipboard.writeText(wallet)
    setCopiedWallet(productName)
    setTimeout(() => setCopiedWallet(''), 2000)
  }

  const PaymentModal = ({ product }) => {
    return (
      <DialogContent className="sm:max-w-md bg-slate-800 border-slate-600">
        <DialogHeader>
          <DialogTitle className="text-white">Payment Options for {product.name}</DialogTitle>
          <DialogDescription className="text-slate-300">
            Choose your preferred payment method
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4">
          {/* Crypto Payment */}
          <div className="p-4 bg-slate-700 rounded-lg border border-slate-600">
            <div className="flex items-center gap-2 mb-3">
              <Wallet className="h-5 w-5 text-orange-400" />
              <h3 className="font-semibold text-white">Crypto Payment</h3>
              <Badge className="bg-orange-500 text-white">Recommended</Badge>
            </div>
            <p className="text-sm text-slate-300 mb-3">Send ${product.price} worth of Bitcoin to:</p>
            <div className="flex items-center gap-2 p-2 bg-slate-900 rounded border">
              <code className="text-xs text-green-400 flex-1 break-all">{product.cryptoWallet}</code>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => copyToClipboard(product.cryptoWallet, product.name)}
                className="text-slate-300 hover:text-white"
              >
                {copiedWallet === product.name ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </Button>
            </div>
            {copiedWallet === product.name && (
              <p className="text-xs text-green-400 mt-1">Wallet address copied!</p>
            )}
          </div>

          {/* UPI Payment */}
          <div className="p-4 bg-slate-700 rounded-lg border border-slate-600">
            <div className="flex items-center gap-2 mb-2">
              <Smartphone className="h-5 w-5 text-blue-400" />
              <h3 className="font-semibold text-white">UPI Payment</h3>
            </div>
            <p className="text-sm text-slate-300">UPI ID: walletfound@paytm</p>
            <p className="text-xs text-slate-400 mt-1">Amount: ${product.price}</p>
          </div>

          {/* PayPal Payment */}
          <div className="p-4 bg-slate-700 rounded-lg border border-slate-600">
            <div className="flex items-center gap-2 mb-2">
              <CreditCard className="h-5 w-5 text-blue-600" />
              <h3 className="font-semibold text-white">PayPal Payment</h3>
            </div>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              Pay ${product.price} with PayPal
            </Button>
          </div>
        </div>
      </DialogContent>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900">
      {/* Header */}
      <header className="bg-blue-900/50 backdrop-blur-sm border-b border-blue-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
              Wallet Found
            </h1>
            <p className="text-xl text-blue-200">Premium Crypto Products & Tools</p>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Discover Professional Crypto Tools
          </h2>
          <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
            Each product comes with its own dedicated crypto wallet for secure payments. 
            Choose from our premium collection of cryptocurrency tools and applications.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="bg-slate-800/80 backdrop-blur-sm border-slate-600 hover:border-blue-500 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
                <CardHeader className="p-0">
                  <div className="aspect-square overflow-hidden rounded-t-lg">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="text-white text-lg mb-2">{product.name}</CardTitle>
                  <CardDescription className="text-slate-300 text-sm mb-3">
                    {product.description}
                  </CardDescription>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-green-400">${product.price}</span>
                    <Badge className="bg-blue-600 text-white">
                      <Wallet className="h-3 w-3 mr-1" />
                      Crypto
                    </Badge>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 hover:shadow-lg">
                        Buy Now
                      </Button>
                    </DialogTrigger>
                    <PaymentModal product={product} />
                  </Dialog>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods Info */}
      <section className="py-16 bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Payment Methods</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-slate-800 rounded-lg border border-slate-600">
              <Wallet className="h-12 w-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Crypto Payment</h3>
              <p className="text-slate-300">Each product has its own dedicated Bitcoin wallet address</p>
            </div>
            <div className="p-6 bg-slate-800 rounded-lg border border-slate-600">
              <Smartphone className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">UPI Payment</h3>
              <p className="text-slate-300">Quick and easy payments through UPI</p>
            </div>
            <div className="p-6 bg-slate-800 rounded-lg border border-slate-600">
              <CreditCard className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">PayPal Gateway</h3>
              <p className="text-slate-300">Secure payments through PayPal</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Wallet Found</h3>
          <p className="text-slate-400 mb-4">Premium crypto products with secure payment options</p>
          <p className="text-sm text-slate-500">&copy; 2024 Wallet Found. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App

