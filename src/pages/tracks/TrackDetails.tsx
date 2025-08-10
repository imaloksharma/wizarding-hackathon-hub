import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import MagicalNavigation from "@/components/MagicalNavigation";
import MagicalFooter from "@/components/MagicalFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getTrackBySlug } from "@/data/tracks";
import { Helmet } from "react-helmet-async";

const TrackDetails = () => {
  const { slug } = useParams();
  const track = getTrackBySlug(slug);

  useEffect(() => {
    if (track) {
      document.title = `${track.title} | HackSpark Tracks`;
    }
  }, [track]);

  if (!track) {
    return (
      <div className="min-h-screen flex flex-col">
        <MagicalNavigation />
        <main className="container mx-auto px-4 py-24 flex-1">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Track Not Found</h1>
            <p className="text-muted-foreground">We couldn’t find this track. Please go back and choose another one.</p>
            <Button asChild variant="magical">
              <Link to="/">Back to Home</Link>
            </Button>
          </div>
        </main>
        <MagicalFooter />
      </div>
    );
  }

  const description = track.metaDescription || track.summary;
  const canonical = typeof window !== "undefined" ? window.location.href : "";

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{track.title} | HackSpark Track</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
      </Helmet>

      <MagicalNavigation />

      <header className="bg-gradient-card border-b">
        <div className="container mx-auto px-4 py-16">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li>/</li>
              <li><Link to="/" className="hover:underline">Tracks</Link></li>
              <li>/</li>
              <li className="text-foreground" aria-current="page">{track.title}</li>
            </ol>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{track.title}</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">{track.summary}</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 flex-1">
        {track.heroImage && (
          <section className="mb-12">
            <img
              src={track.heroImage}
              alt={`${track.title} hero image`}
              loading="lazy"
              className="w-full max-h-[420px] object-cover rounded-lg shadow-magical"
            />
          </section>
        )}

        <section className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            {track.sections.map((section) => (
              <Card key={section.title}>
                <CardHeader>
                  <CardTitle className="text-2xl">{section.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  {section.type !== "list" && section.type !== "code" && (
                    <p className="leading-relaxed text-muted-foreground whitespace-pre-line">{section.content}</p>
                  )}

                  {section.type === "list" && (
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      {section.items?.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}

                  {section.type === "code" && (
                    <pre className="bg-card p-4 rounded-md overflow-x-auto text-sm border">
                      <code>{section.content}</code>
                    </pre>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <aside className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>About this track</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <p>Category: <span className="text-foreground font-medium">{track.category || "General"}</span></p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Ready to build?</CardTitle>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full" variant="magical">
                  <Link to="/brochure">Register / Brochure</Link>
                </Button>
              </CardContent>
            </Card>
          </aside>
        </section>
      </main>

      <MagicalFooter />
    </div>
  );
};

export default TrackDetails;
