// src/components/PublicationCard.jsx

import React from "react";
import {
    ExternalLink,
    FileText,
    BookOpen,
    Calendar,
    Users,
    Building2,
    Presentation,
} from "lucide-react";

const PublicationCard = ({ publication }) => {

    const ribbonColors = {
        "Book Chapter": "ribbon-book",
        "Journal Article": "ribbon-journal",
        "Conference Paper": "ribbon-conference",
        "Preprint": "ribbon-preprint",
    };

    return (
        <div className="publication-card group">

            {/* Publication Type Ribbon */}
            <div
                className={`publication-ribbon ${ribbonColors[publication.publicationType] || "ribbon-book"
                    }`}
            >
                {publication.publicationType}
            </div>

            <div className="publication-content">

                {/* Left Side */}
                <div className="publication-image-wrapper">
                    <img
                        src={publication.previewImage}
                        alt={publication.title}
                        className="publication-image"
                    />
                </div>

                {/* Right Side */}
                <div className="publication-details">

                    {/* Status */}
                    <span
                        className={`publication-status ${publication.status === "Published"
                            ? "published"
                            : "accepted"
                            }`}
                    >
                        {publication.status}
                    </span>

                    {/* Title */}
                    <h3 className="publication-title">
                        {publication.title}
                    </h3>

                    {/* Metadata */}
                    <div className="publication-meta">

                        <div className="meta-item">
                            <Building2 size={16} />
                            <span>{publication.publisher}</span>
                        </div>

                        <div className="meta-item">
                            <BookOpen size={16} />
                            <span>{publication.series}</span>
                        </div>

                        {publication.presentedAt && (
                            <div className="meta-item">
                                <Presentation size={16} />
                                <span>{publication.presentedAt}</span>
                            </div>
                        )}

                        <div className="meta-item">
                            <Calendar size={16} />
                            <span>{publication.year}</span>
                        </div>

                    </div>

                    {/* Description */}
                    <p className="publication-description">
                        {publication.description}
                    </p>

                    {/* Authors */}
                    <div className="publication-authors">

                        <Users size={18} />

                        <span>
                            {publication.authors.join(", ")}
                        </span>

                    </div>

                    {/* Keywords */}
                    {publication.keywords?.length > 0 && (
                        <div className="publication-keywords">

                            {publication.keywords.map((keyword) => (
                                <span
                                    key={keyword}
                                    className="keyword-chip"
                                >
                                    {keyword}
                                </span>
                            ))}

                        </div>
                    )}

                    {/* Buttons */}

                    <div className="publication-buttons">

                        {publication.previewLink && (
                            <a
                                href={publication.previewLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="publication-btn preview-btn"
                            >
                                <FileText size={18} />
                                Preview First Page
                            </a>
                        )}

                        {publication.publicationLink && (
                            <a
                                href={publication.publicationLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="publication-btn publisher-btn"
                            >
                                <ExternalLink size={18} />
                                Published Version
                            </a>
                        )}

                    </div>

                </div>
            </div>
        </div>
    );
};

export default PublicationCard;