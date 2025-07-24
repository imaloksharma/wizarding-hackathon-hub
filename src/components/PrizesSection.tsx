import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Medal, Award, Gift, Star, Crown } from 'lucide-react';

const PrizesSection = () => {
  const prizes = [
    {
      rank: "1st Place",
      title: "Triwizard Champions",
      amount: "₹15,000",
      description: "The ultimate glory and recognition as the most skilled magical developers.",
      icon: Crown,
      gradient: "from-yellow-400 via-yellow-500 to-amber-600",
      shadowColor: "shadow-yellow-500/50",
      perks: [
        "Cash Prize: ₹15,000",
        "Internship opportunities at top tech companies",
        "Exclusive mentorship program",
        "Featured on our Hall of Fame",
        "Premium swag package"
      ]
    },
    {
      rank: "2nd Place",
      title: "Order of Merlin",
      amount: "₹10,000",
      description: "Exceptional magical abilities deserve exceptional recognition and rewards.",
      icon: Medal,
      gradient: "from-gray-300 via-gray-400 to-gray-500",
      shadowColor: "shadow-gray-400/50",
      perks: [
        "Cash Prize: ₹10,000",
        "Job placement assistance",
        "Tech conference tickets",
        "Professional swag package",
        "Certificate of Excellence"
      ]
    },
    {
      rank: "3rd Place",
      title: "House Cup Winners",
      amount: "₹5,000",
      description: "Your magical journey has earned you a place among the most talented wizards.",
      icon: Trophy,
      gradient: "from-amber-600 via-amber-700 to-yellow-800",
      shadowColor: "shadow-amber-600/50",
      perks: [
        "Cash Prize: ₹5,000",
        "Industry networking events",
        "Online course vouchers",
        "Standard swag package",
        "Recognition certificate"
      ]
    }
  ];

  const specialPrizes = [
    {
      title: "Best Innovation",
      description: "Most creative and innovative solution",
      prize: "₹1000",
      icon: Star,
      color: "text-purple-500"
    },
    {
      title: "Best UI/UX",
      description: "Most beautiful and user-friendly design",
      prize: "₹500",
      icon: Award,
      color: "text-pink-500"
    },
    {
      title: "Best Tech Implementation",
      description: "Most impressive technical achievement",
      prize: "₹500",
      icon: Gift,
      color: "text-blue-500"
    },
    {
      title: "People's Choice",
      description: "Voted by fellow participants",
      prize: "₹5,00",
      icon: Star,
      color: "text-green-500"
    }
  ];

  return (
    <section id="prizes" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-magical mb-6">
            Legendary Rewards
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Extraordinary achievements deserve extraordinary rewards. Compete for magical prizes 
            that will accelerate your career and recognize your coding mastery.
          </p>
        </div>

        {/* Main prizes */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {prizes.map((prize, index) => (
            <Card 
              key={index}
              className={`group relative overflow-hidden bg-gradient-card border-border hover:shadow-glow transition-all duration-500 hover:scale-105 ${index === 0 ? 'lg:scale-110 z-10' : ''}`}
            >
              {/* Rank badge */}
              <div className="absolute top-4 right-4 z-10">
                <Badge 
                  variant="secondary" 
                  className={`bg-gradient-to-r ${prize.gradient} text-white font-bold ${prize.shadowColor} shadow-lg`}
                >
                  {prize.rank}
                </Badge>
              </div>

              <CardHeader className="text-center pb-4">
                {/* Prize icon */}
                <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r ${prize.gradient} p-5 ${prize.shadowColor} shadow-2xl group-hover:shadow-glow transition-all`}>
                  <prize.icon className="w-10 h-10 text-white" />
                </div>

                <CardTitle className="text-2xl font-bold text-foreground mb-2">
                  {prize.title}
                </CardTitle>
                
                <div className={`text-4xl font-bold bg-gradient-to-r ${prize.gradient} bg-clip-text text-transparent`}>
                  {prize.amount}
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-muted-foreground text-center leading-relaxed">
                  {prize.description}
                </p>

                {/* Perks list */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">What You Get:</h4>
                  <ul className="space-y-2">
                    {prize.perks.map((perk, perkIndex) => (
                      <li key={perkIndex} className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${prize.gradient}`}></div>
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Special prizes */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-magical mb-4">
              Special Recognition Awards
            </h3>
            <p className="text-lg text-muted-foreground">
              Additional prizes for exceptional achievements in specific categories
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialPrizes.map((special, index) => (
              <Card key={index} className="bg-gradient-card border-border hover:shadow-glow transition-all duration-500 group">
                <CardContent className="p-6 text-center space-y-4">
                  <div className={`w-12 h-12 mx-auto rounded-lg bg-card p-3 shadow-magical group-hover:shadow-glow transition-all`}>
                    <special.icon className={`w-6 h-6 ${special.color}`} />
                  </div>
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {special.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {special.description}
                  </p>
                  <div className="text-xl font-bold text-primary">
                    {special.prize}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Total prize pool */}
        <Card className="mt-16 bg-gradient-card border-border shadow-glow">
          <CardContent className="p-12 text-center space-y-6">
            <Trophy className="w-16 h-16 text-primary mx-auto animate-float" />
            <h3 className="text-4xl font-bold text-magical">
              Total Prize Pool
            </h3>
            <div className="text-6xl font-bold text-magical">
              ₹50,000+
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Plus countless opportunities for internships, job placements, and career acceleration 
              through our extensive network of industry partners.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PrizesSection;