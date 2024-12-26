"use client";
import React from "react";
import { Carousel, Card } from "@/components/ui/carousel";
import { Header } from "./header";

export function Journals() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="h-full w-full py-20" id="journals">
      <Header header="Journals" />
      <Carousel items={cards} />
    </div>
  );
}

const JellContent = () => {
  return (
    <div className="mb-4 rounded-3xl bg-muted p-8 md:p-14">
      <p className="text-justify">
        Journal of English Language and Literature (JELL), an initiative of
        TechMind Research, is an online, blind peer reviewed, bimonthly
        published journal. It invites original and unpublished research articles
        and book reviews for its issues. The published papers are free to access
        and download throughout the world. JELL provides a shared platform for
        exchange of information and ideas to keep in touch with the advancements
        in the field of Interdisciplinary Literary Studies , Linguistics,
        Language and Communication, Teaching Methodology, Discourse Analysis and
        any other topic relevant to it. It publishes articles, review papers,
        book reviews, conference proceedings etc.
      </p>
    </div>
  );
};

const IjmeContent = () => {
  return (
    <div className="mb-4 rounded-3xl bg-muted p-8 md:p-14">
      <p className="text-justify">
        International Journal of Management Excellence (IJME), peer-reviewed and
        published bi-monthly, interdisciplinary management journal, indexed with
        Thomson Reuters Researcher ID, J-Gate, Google Scholar,
        Eyesource,CiteSeer, World Cat, Open archives initiative, Citefactor,
        Open Library, Cornell University Library, University of Washington
        Library & many other renowned indexes worldover. IJME is a Renowned
        worldwide publication, Open Access, Blind Peer reviewed, Internationally
        reputed journal managed by Editorial board from USA, Canada, Australia,
        UK, Singapore, Indonesia, South Africa, Newzealand & India.
      </p>
    </div>
  );
};

const JormContent = () => {
  return (
    <div className="mb-4 rounded-3xl bg-muted p-8 md:p-14">
      <p className="text-justify">
        Journal of Research in Marketing (JORM), double-blind peer-reviewed and
        published bi-monthly, interdisciplinary Marketing journal, is committed
        to publishing scholarly empirical and theoretical research articles that
        have a high impact on the marketing field as a whole. JORM is indexed
        with Thomson Reuters Researcher ID, J-Gate, Google Scholar,
        Eyesource,CiteSeer, World Cat, Open archives initiative, Citefactor,
        Open Library, Cornell University Library, University of Washington
        Library & many other renowned indexes worldover. JORM is a Renowned
        worldwide publication, Open Access, Blind Peer reviewed, Internationally
        reputed journal managed by Editorial board from USA, Canada, Australia,
        UK, Singapore, Indonesia, South Africa, Newzealand & India.
      </p>
    </div>
  );
};

const IjrbtContent = () => {
  return (
    <div className="mb-4 rounded-3xl bg-muted p-8 md:p-14">
      <p className="text-justify">
        International Journal of Research in Business and Technology (IJRBT) is
        an electronically published, double blind peer review journal aiming at
        providing an authentic forum for researchers. For pursuing research it
        is necessary to review earlier works and try to separate the better
        quality sources from the poorly designed studies. We publish original
        works that strictly adheres to the guidelines for evaluating quality.
        IJRBT is indexed with Thomson Reuters Researcher ID, J-Gate, Google
        Scholar, Eyesource,CiteSeer, World Cat, Open archives initiative,
        Citefactor, Open Library, Cornell University Library, University of
        Washington Library & many other renowned indexes worldover. IJRBT is a
        Renowned worldwide publication, Open Access, Blind Peer reviewed,
        Internationally reputed journal managed by Editorial board from USA,
        Canada, Australia, UK, Singapore, Indonesia, South Africa, Newzealand &
        India.
      </p>
    </div>
  );
};

const data = [
  {
    category: "JELL",
    title: "Journal of English Language and Literature",
    src: "/assets/journals/jell.png",
    content: <JellContent />,
  },
  {
    category: "JORM",
    title: "Journal of Research in Marketing",
    src: "/assets/journals/jorm.png",

    content: <JormContent />,
  },
  {
    category: "IJME",
    title: "International Journal of Management Excellence",
    src: "/assets/journals/ijme.png",

    content: <IjmeContent />,
  },

  {
    category: "IJRBT",
    title: "International Journal of Research in Business and Technology",
    src: "/assets/journals/ijrbt.png",

    content: <IjrbtContent />,
  },
];
