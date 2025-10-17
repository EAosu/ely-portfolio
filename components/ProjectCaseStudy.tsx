type T = { en: string; he: string };
type CaseStudy = {
    overview: T; problem: T; solution: T;
    challenges: T[]; results: T; highlights?: string[];
};

export default function ProjectCaseStudy({
                                             cs, isHe,
                                         }: { cs: CaseStudy; isHe: boolean }) {
    const pick = (t: T) => (isHe ? t.he : t.en);
    return (
        <div className="prose prose-invert max-w-none font-semibold">
            <h2 className="underline">{isHe ? "סקירה:" : "Overview:"}</h2>
            <p>{pick(cs.overview)}</p>
            <hr className="my-10 border-black/30" />

            <h3 className="underline">{isHe ? "הבעיה:" : "Problem:"}</h3>
            <p>{pick(cs.problem)}</p>
            <hr className="my-10 border-black/30" />

            <h3 className="underline">{isHe ? "הפתרון:" : "Solution:"}</h3>
            <p>{pick(cs.solution)}</p>
            <hr className="my-10 border-black/30" />

            <h3 className="underline">{isHe ? "אתגרים טכניים:" : "Technical Challenges:"}</h3>
            <ul>
                {cs.challenges.map((c, i) => <li key={i}>{pick(c)}</li>)}
            </ul>
            <hr className="my-10 border-black/30" />

            <h3 className="underline">{isHe ? "תוצאות:" : "Results:"}</h3>
            <p>{pick(cs.results)}</p>
            <hr className="my-10 border-black/30" />

            {cs.highlights?.length ? (
                <>
                    <h3 className="underline">{isHe ? "דגשים:" : "Highlights:"}</h3>
                    <ul>
                        {cs.highlights.map((h, i) => <li key={i}>{h}</li>)}
                    </ul>
                </>
            ) : null}
        </div>
    );
}
