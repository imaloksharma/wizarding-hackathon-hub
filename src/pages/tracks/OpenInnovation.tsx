import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ArrowRight, ArrowDown, ChevronLeft, ChevronRight, Lightbulb, Target, CheckCircle, Users, Trophy, Clock } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import MagicalNavigation from '@/components/MagicalNavigation';
import MagicalFooter from '@/components/MagicalFooter';
import finalChallenge from '@/assets/final-challenge.jpg';

const OpenInnovation = () => {
  const navigate = useNavigate();

  const objectives = [
    "Develop creative and disruptive solutions without domain restrictions",
    "Foster cross-disciplinary innovation and collaboration",
    "Encourage bold thinking and experimental approaches",
    "Create solutions that can impact multiple sectors",
    "Demonstrate scalability and real-world application potential"
  ];

  const deliverables = [
    "Working prototype or comprehensive solution design",
    "Innovation feasibility study and market analysis", 
    "Technical documentation and implementation roadmap",
    "Presentation demonstrating unique value proposition",
    "Future development and scaling strategy"
  ];

  const judgesCriteria = [
    { criteria: "Innovation & Creativity", weight: "30%" },
    { criteria: "Technical Excellence", weight: "25%" },
    { criteria: "Market Potential", weight: "20%" },
    { criteria: "Feasibility", weight: "15%" },
    { criteria: "Presentation Quality", weight: "10%" }
  ];

  const resources = [
    "Open-source development frameworks and libraries",
    "Cloud computing credits for prototyping",
    "API access to various services and platforms",
    "Design tools and UI/UX resources",
    "Mentorship from industry experts across domains",
    "Research databases and market intelligence"
  ];

  return (
    <div className="min-h-screen bg-background">
      <MagicalNavigation />
      
      {/* Navigation arrows */}
      <div className="fixed top-1/2 left-4 z-40 transform -translate-y-1/2">
        <Button
          variant="ghost"
          size="icon"
          className="magical-arrow-nav group"
          onClick={() => navigate('/tracks/ai-smart-healthcare')}
        >
          <ChevronLeft className="w-6 h-6 text-primary group-hover:text-magical transition-colors" />
        </Button>
      </div>
      
      <div className="fixed top-1/2 right-4 z-40 transform -translate-y-1/2">
        <Button
          variant="ghost"
          size="icon"
          className="magical-arrow-nav group"
          onClick={() => navigate('/tracks/ai-green-economy')}
        >
          <ChevronRight className="w-6 h-6 text-primary group-hover:text-magical transition-colors" />
        </Button>
      </div>

      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="starry-bg"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Back button */}
            <div className="mb-8">
              <Link to="/#challenges">
                <Button variant="ghost" className="group">
                  <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                  Back to All Tracks
                </Button>
              </Link>
            </div>

            {/* Track badge */}
            <Badge variant="secondary" className="mb-6 px-6 py-2 text-lg">
              <Lightbulb className="w-5 h-5 mr-2" />
              Track 6 • Open Innovation
            </Badge>

            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-bold text-magical mb-6 leading-tight">
              Open Innovation
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 italic">
              "Innovation without boundaries - where imagination meets reality"
            </p>

            {/* Hero image */}
            <div className="mb-12 relative">
              <img
                src={finalChallenge}
                alt="Open Innovation Challenge"
                className="mx-auto w-full max-w-2xl rounded-lg shadow-glow opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/20 to-orange-500/20 rounded-lg"></div>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-4 gap-6 mb-16">
              <div className="magical-card p-6">
                <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-magical">24 Hours</div>
                <div className="text-muted-foreground">Innovation Sprint</div>
              </div>
              <div className="magical-card p-6">
                <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-magical">3-5</div>
                <div className="text-muted-foreground">Team Members</div>
              </div>
              <div className="magical-card p-6">
                <Target className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-magical">No Limits</div>
                <div className="text-muted-foreground">Domain Freedom</div>
              </div>
              <div className="magical-card p-6">
                <Trophy className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-magical">Special</div>
                <div className="text-muted-foreground">Recognition</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Track Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="magical-card mb-12">
              <CardHeader>
                <CardTitle className="text-3xl text-magical mb-4">Track Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-lg leading-relaxed">
                  The Open Innovation track is designed for teams who want to push the boundaries of creativity 
                  and develop groundbreaking solutions without domain restrictions. This track encourages 
                  interdisciplinary thinking and rewards bold, innovative approaches that can potentially 
                  revolutionize multiple industries.
                </p>
                <p className="text-lg leading-relaxed">
                  Unlike other tracks that focus on specific domains, Open Innovation allows participants 
                  to explore any area of technology, combining different fields to create unique solutions 
                  that address complex, real-world challenges in novel ways.
                </p>
                
                <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 p-6 rounded-lg border border-yellow-500/20">
                  <h4 className="text-xl font-semibold text-foreground mb-3">Key Themes</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-yellow-500" />
                      <span>Cross-domain Innovation</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-yellow-500" />
                      <span>Disruptive Technologies</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-yellow-500" />
                      <span>Future-focused Solutions</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-yellow-500" />
                      <span>Scalable Impact</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Track Objectives */}
            <Card className="magical-card mb-12">
              <CardHeader>
                <CardTitle className="text-2xl text-magical flex items-center">
                  <Target className="w-6 h-6 mr-3 text-yellow-500" />
                  Track Objectives
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {objectives.map((objective, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <ArrowRight className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <span className="text-lg">{objective}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Deliverables */}
            <Card className="magical-card mb-12">
              <CardHeader>
                <CardTitle className="text-2xl text-magical flex items-center">
                  <CheckCircle className="w-6 h-6 mr-3 text-yellow-500" />
                  Expected Deliverables
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {deliverables.map((deliverable, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 rounded-lg bg-muted/30">
                      <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-yellow-500 font-bold">{index + 1}</span>
                      </div>
                      <span className="text-lg">{deliverable}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Judges Criteria */}
            <Card className="magical-card mb-12">
              <CardHeader>
                <CardTitle className="text-2xl text-magical flex items-center">
                  <Trophy className="w-6 h-6 mr-3 text-yellow-500" />
                  Evaluation Criteria
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {judgesCriteria.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg border border-border/50">
                      <span className="font-medium text-lg">{item.criteria}</span>
                      <Badge variant="secondary" className="text-yellow-500 border-yellow-500/20">
                        {item.weight}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Resources */}
            <Card className="magical-card mb-12">
              <CardHeader>
                <CardTitle className="text-2xl text-magical">Available Resources</CardTitle>
                <CardDescription>Tools and support available for participants</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {resources.map((resource, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/20 transition-colors">
                      <ArrowDown className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                      <span>{resource}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <div className="text-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white hover:shadow-glow animate-magical-pulse"
                onClick={() => window.open('https://devnovate.co/event/hackspark-2025-genai-hackathon', '_blank')}
              >
                <Lightbulb className="w-5 h-5 mr-2" />
                Register for Open Innovation Track
              </Button>
            </div>
          </div>
        </div>
      </section>

      <MagicalFooter />
    </div>
  );
};

export default OpenInnovation;