import "../index.css";
import { useEffect, useState, useContext } from "react";
import i18n from "../i18";
import { Context } from "../components/Context";

// {i18n.gettext("something")}

export default function Homepage() {
  useContext(Context);
  return (
    <div className="text-center mt-10 uppercase mx-auto md:max-w-xl ">
      <div className="text-center mt-10 uppercase mx-auto md:max-w-xl ">
        <h1 className="text-4xl font-rubik block">Welcome to Chat</h1>
        <h1 className="text-4xl font-rubik block">
          {i18n.gettext("clinicOfTheFuture")}
        </h1>
        {/* Polygon Shape text */}
        <div className="div--triangle">
          <h2 className="text2xl font-roboto block">
            We offer a unique system that matches you with a doctor based on
            your preferences and the preferences of our doctors.
          </h2>
        </div>
        {/* 1153 vs 574 */}
        <div className="div--promos">
          <iframe
            className="responsive-iframe"
            width="1153"
            height="574"
            src="https://www.youtube.com/embed/tks8vUwh3wM"
            title="iPhone 14 - TRAILER"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="text-start uppercase mx-auto md:max-w-lg ml-4 sm:ml-0">
          <h1 className="text-4xl font-rubik block uppercase">
            Get matched to a doctor
          </h1>

          <div className="mt-4">
            <h2 className="text-xl font-roboto block">
              We accept unattached patients until we match them with one of our
              doctors.
            </h2>
            <div className="mt-4">
              <h2 className="text-2xl font-semibold font-vogue block uppercase">
                How the match works
              </h2>
              <ol>
                <li>
                  Visit the 'Register as a patient' link to begin your
                  registration
                </li>
                <li>Complete a questionnaire</li>
                <li>
                  Receive a notification by email and/or phone about potential
                  match(es) based on your preferences
                </li>
                <li>
                  Call practice/family doctor and book your first
                  Homepageointment
                </li>
                <li>
                  No matches? You will be placed in a queue and receive monthly
                  status updates up to 6 months (unsubscribe anytime!)
                </li>
                <li>
                  Your needs have changed? Submit a new questionnaire and
                  initiate a new match
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className="div--joinTriangle uppercase text-4xl font-rubik font-bold">
          <h1>Join </h1>
          <h1> as a patient</h1>
        </div>
        <div className="mr-5 text-end">
          <h1 className="text-4xl font-raleway">Be part of our </h1>
          <h1 className="text-4xl font-raleway">medical team</h1>

          <h2 className="text-2xl lowercase first-letter:uppercase font-raleway ">
            Get matched with patients that fit into your area of expertise.
          </h2>
        </div>
        <div className="div--joinBackwardsTriangle uppercase text-4xl font-rubik font-bold">
          <h1>Join </h1>
          <h1> as a doctor</h1>
        </div>
      </div>
    </div>
  );
}
