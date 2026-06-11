import SectionReveal from "./SectionReveal";

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 px-8 md:px-16 lg:px-24 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <SectionReveal>
          <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            The Ledger
          </p>
          <h2 className="font-serif text-4xl md:text-6xl text-foreground mb-16">
            Contact
          </h2>
        </SectionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <SectionReveal delay={0.1}>
            <div className="space-y-10">
              <div>
                <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">Lasse</p>
                <a className="font-serif text-2xl md:text-3xl text-foreground hover:opacity-50 transition-opacity duration-300" href="mailto:lv@hcpackaging.eu">
                  
lv@hcpackaging.eu
                </a>
              </div>
              <div>
                <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">Mads</p>
                <a className="font-serif text-2xl md:text-3xl text-foreground hover:opacity-50 transition-opacity duration-300" href="mailto:\u200Bmrn@hcpackaging.eu">
                  ​mrn@hcpackaging.eu
                </a>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <div className="space-y-8 lg:text-right">
              <div>
                <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">Studio</p>
                <p className="font-body text-sm text-foreground leading-relaxed">
                  HC Packaging ApS<br />
                  Nordre Toldbod 19<br />
                  1259 København K<br />
                  Denmark
                </p>
              </div>
              <div>
                <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">CVR</p>
                <p className="font-body text-sm text-foreground">DK-40002529</p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto mt-32 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground">
          HC Packaging © 2018 
        </p>
        <p className="font-body text-xs text-muted-foreground">
          Premium packaging solutions
        </p>
      </div>
    </section>);
};

export default ContactSection;