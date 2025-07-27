import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Shield, Users, Code, Trophy, AlertTriangle, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Rules = () => {
  const eligibilityRules = [
    "Students from any college or university (undergraduate/postgraduate)",
    "Professional developers and working professionals",
    "Age limit: 18-30 years at the time of registration",
    "Valid government ID required for verification",
    "Basic programming knowledge is mandatory"
  ];

  const teamRules = [
    "Team size: Minimum 3, Maximum 5 members",
    "Teams can be formed during the event or pre-registered",
    "Cross-college and cross-company teams are encouraged",
    "At least one member must be present during registration",
    "Team composition cannot be changed after problem statement release"
  ];

  const codingRules = [
    "All code must be written during the 48-hour event period",
    "Use of existing libraries and frameworks is allowed",
    "Pre-written code or existing projects are strictly prohibited",
    "All submissions must be original work of the team",
    "Plagiarism will result in immediate disqualification"
  ];

  const submissionRules = [
    "Final submission deadline: Day 2, 12:00 PM sharp",
    "Projects must be submitted via the official platform",
    "Include source code, documentation, and demo video",
    "Presentation slides must be prepared for final demo",
    "Late submissions will not be accepted under any circumstances"
  ];

  const conduct = [
    "Respect all participants, mentors, and organizers",
    "Maintain a professional and inclusive environment",
    "No discrimination based on gender, race, religion, or background",
    "Report any harassment or misconduct to organizers immediately",
    "Follow all venue rules and safety guidelines"
  ];

  const prohibitions = [
    "Use of alcohol or drugs during the event",
    "Bringing unauthorized persons to the venue",
    "Disrupting other teams or creating disturbances",
    "Violating intellectual property rights",
    "Sharing solutions or helping other teams inappropriately"
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Starry background */}
      <div className="starry-bg"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center space-x-2 text-primary hover:text-accent transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="px-6 py-2 text-lg font-medium bg-card/60 backdrop-blur-sm">
              <Shield className="w-5 h-5 mr-2" />
              Official Rules & Regulations
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-magical">
              Tournament Laws ⚖️
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The sacred rules that govern our magical coding tournament
            </p>
          </div>
        </div>

        {/* Important Notice */}
        <Card className="mb-8 bg-gradient-card border-destructive/50 shadow-glow">
          <CardContent className="p-6">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="w-6 h-6 text-destructive mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-destructive mb-2">Important Notice</h3>
                <p className="text-foreground">
                  All participants must read and agree to these rules before participating. 
                  Violation of any rule may result in disqualification from the tournament. 
                  The organizers' decision will be final in all matters.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Eligibility Rules */}
          <Card className="bg-gradient-card border-border/50 shadow-glow">
            <CardHeader>
              <CardTitle className="text-xl text-primary flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span>Eligibility Criteria</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {eligibilityRules.map((rule, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground">{rule}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Team Rules */}
          <Card className="bg-gradient-card border-border/50 shadow-glow">
            <CardHeader>
              <CardTitle className="text-xl text-primary flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span>Team Formation</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {teamRules.map((rule, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground">{rule}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Coding Rules */}
          <Card className="bg-gradient-card border-border/50 shadow-glow">
            <CardHeader>
              <CardTitle className="text-xl text-primary flex items-center space-x-2">
                <Code className="w-5 h-5" />
                <span>Coding Guidelines</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {codingRules.map((rule, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground">{rule}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Submission Rules */}
          <Card className="bg-gradient-card border-border/50 shadow-glow">
            <CardHeader>
              <CardTitle className="text-xl text-primary flex items-center space-x-2">
                <Trophy className="w-5 h-5" />
                <span>Submission Requirements</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {submissionRules.map((rule, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground">{rule}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Code of Conduct */}
        <Card className="mt-8 bg-gradient-card border-border/50 shadow-magical">
          <CardHeader>
            <CardTitle className="text-2xl text-magical flex items-center space-x-2">
              <Shield className="w-6 h-6" />
              <span>Code of Conduct</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-primary mb-4">Expected Behavior ✅</h3>
                <ul className="space-y-3">
                  {conduct.map((item, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-destructive mb-4">Prohibited Activities ❌</h3>
                <ul className="space-y-3">
                  {prohibitions.map((item, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <AlertTriangle className="w-4 h-4 text-destructive mt-1 flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Judging Criteria */}
        <Card className="mt-8 bg-gradient-card border-border/50 shadow-glow">
          <CardHeader>
            <CardTitle className="text-xl text-primary flex items-center space-x-2">
              <Trophy className="w-5 h-5" />
              <span>Judging Criteria</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-foreground">Innovation & Creativity</span>
                  <Badge variant="outline">25%</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground">Technical Implementation</span>
                  <Badge variant="outline">25%</Badge>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-foreground">Problem Solving</span>
                  <Badge variant="outline">25%</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground">Presentation & Demo</span>
                  <Badge variant="outline">25%</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button 
            variant="default" 
            size="lg" 
            className="bg-gradient-magical text-background font-semibold hover:shadow-glow transition-all duration-300 hover:scale-105"
          >
            🪄 I Agree to the Rules - Register Now
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            By registering, you confirm that you have read and agree to all the rules and regulations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Rules;