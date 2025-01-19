export const temp = [
    {
        temp_id: 1521,
        temp: `<div id="content-to-print" class='print1' style=" font-family: 'Open Sans', sans-serif;">
<div class="header">
</div>
<div class="main-con">

<div class="con">
<div class="side-bar">
    <div class="img_con">
        <img src="${data['profile']}"
            alt="">
    </div>
    <div class="pd address">
        <div class="head">Address</div>
        <p>${data['ad-line-1']}</p>
        <p>${data['ad-line-2']}</p>
        <p>${data['district']}</p>
        <p>${data['state']}</p>

    </div>
    <div class="pd handles">
        <div class="head">Handles</div>

        <div class="social">
            <div class="social_con">
                <img
                    src="data:image/png;base64,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" />
            </div>
            <p>Twitter
            </p>
        </div>
        <div class="social">
            <div class="social_con">
                <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAC+lBMVEUAAAAAAAAAAAAkJCQZGRkzMzMcHBwmHh4fHx8nJyckJCQAAAAqKiouFxcjHx8hISEiHx8/AAAnHR0eHh4lHBwkHx8fHx8kHR0oGholHh4jIyMjHiAkHx8hISEiHx8jHiAjHx8jHiAiHh8iHSAjHyAiHyAiHyAhHSEiHiAiHiAiHiAjICAfHx8kHiEjHx8iHh8jHiAiHiAiHyAkICAjHSAiHx8iHyAjHSAkHiEjHyAjICAjHx8iHh8iIiIiHiAhHCEjHx8eHh4jHx8iICAiHyAiGyIkHh4lHx8kICAiHiAkHx8iHiAiIiIjHiAiHiAkHSEkGyQjICAiHx8jHh8jHx8iHx8iHh8iHx8iHh8iHiAlICAiHiAiHx8hHSEhHiEjHiAiHx8iHiAjHiEjHx8iHiAhISEjHx8jHiAkHiEiHx8jHiAjHx8iHx8jHx8jHyAjHx8jHh4jHx8hHx8iHSIiHx8iHx8jHh4iHyAiHh8kJCQhHh4jHx8iHx8cHBwkHx8iHiAjHx8jHh8iHiAjHx8jHh8jHx8jHh8jHh4jHiAiHCIjHx8iHh4iHh8lICAiHx8jHiAjHCMjHyAlHx8iHx8iHh4iHyAgICAjHh4jHx8jHiAgICAiHh4iHiAiHyAjHiAiHx8hISEjHiAjHiAiHx8jHyAjHx8iHiAjHh8jHiAjHyAmGSYiHiAiHyAjHh8iHx8iHiAhHh4jHiAjHiAiHiAiHx8iHx8jHiAjHx8jHh8iHx8iHCIjHyAjHx8iHiAjHx8iHSIiHh8iHiAjHiEjHx8jHh8iHx8iHh8jHx8jHiAjHx8jHiAiIiIjHyAiHh4jHiAiHx8jHR0fHx8iHyAiHiAjHSAjHx8iHx8jHiAiHiAjHyAiHh8qFSogICAiHyAjHh8iHyAjHh8hHiEiHh8fHx8jHh8jHh8jHx8jHyAjHh8iHx8iICAiHx8kHh4iHiAjHyAiHx8iHh8iHx8iHh8iHh8iHx8jHyAjHyAjHyAjHyAiHyAjHyAjHiAjHiAiHx8rcusQAAAA/nRSTlMAAgEHCgUJIQgNDgMGC3oXWAQaERs4GCMTIh2HMTZKXbpm+G/t3s09dn6+RyBUc+JljpQ/VmHdTlysT4HyFn01ORmCZ+QlYzBGt2p8HrXPTRxXWtBBqrhRwIQ3jJJFRK5JhWx5jS57n1VwtoixibzDM7NiNFmrMpywFVtyshJxf4OYlUjhysk6pizTS8g+eJYktCloO9Qna1CnH0KG3HRpJp6tk+6RddnfvRSv7NGLxlNtj87boZ2KoJstxEDHuzzB1mTL2GDqwpeA7w/mQ9eaKxDFbl6ZqaV3zKgML+Xp1fBMuSjo4NL22qJfoyq/pOv58/H6+/z//v309ffn49++fSkAAA89SURBVHjavNd5UFXXHcDxHxAQEEFEpEREDCJI4oKaGM2ibYG6dWpcJ9VRZ2LrpKaZLjNdsrTJpE0bTWIal2piFk3jNC6xI9FKTFwyaaKouAACIrIU2WV7737fQ2AmE4H37jucB4/FfP67M2/Ove93zm850ldBEbNLqsdk5eVljakuCY8Iku/OXSfee/Fkmx0X9raTpzdv8bvzL9946GULblleTYq+S+6YP24ubcHJKCvKv3z8+OX8ojIDp5bS1EC5A/wXxRi0M05dCZ42KkRMQkZNC756yqBdxY7oUBlYC5LGAoAlcfyqAHGjYNWfb1oAoHXFAhk47++yAJBxdHuA9CBgee4tACxHUmRgXLtqB7Du+4mPeCTw/pt2AGPHp9J/C5faAOrHD5NeeOtMPYBtx3Dpn9DYJoDrZwKll4bEtgE0nwmSfogvB7gR6yd9EJRdCXDghPTVkN/bgOY8X+mjoNebAduFPtam/5cD/Po+6YfhVQCZfTqM2c3AA9HST+czgYpY6S2/dICqIdJv/h8CVBVIr4SkARWTZUCMbgTKe5XGgyqBU6/IANl2AIhLEY9FtQJ1fgPYxXOB1ijx0GfFwIdeMoC8fwk0zvHw/S1ge1cGWIINWpaIBz7NAOMLGXCjLdD0O+lRRCtYp4sH9oY/82zw+ilHruQc2pmX/bcQ6cFMK7RGSg9GvAO27B6L5OTD+RkoGg9+PP170o1qG3wS0kP5TwP2SHfCUndfxx3buIRuSncCMK772lYFrOgunx77wz10sj5wctnSdZv+m1MzI/ETCx1sn3/hI26sBdZJN+4H6rzd78/IYtq15WatSfEVk9CINQ8l3gKAsvlutsI7F6gWty7egg1ue+cbOS0ANOZmDxI939c+aAWgMdhfH8Gt0Fzr9gAUQfOboheYZAVoeGpo99198JKlBkDcBNGpbYat7lZIB7JFy/uZcwDFI0d40klWNgPs26tNBSBHtOJtsEu0RsQAXE8I9HgOsQGFq0TjKNi2iEZoObyjD875VsC68pJ4blQ+YJuv2+g4WBwqXU0EokXD6wd24Ng10fELC/MSHd+dduCIZp4sAZ7URO1hWK1dqQ4wxquvSUld+1zmvwAw2o7VJSwJEMXUQqBUE9OnoOn7oroCzQt0ifNj4NxnYuZbUlOIypoYq9xC7i4HSn1Edd8tyBXFz2yQJ10FXAbyQ8QkcmU9etYZU8UsMAZYHSqqYLBfFFdXIc5XE/9S4CNzdC/mWgHg3O71qXN+VRsZGRU+YeKL4ywAEPMjMfGJ0Sadz1+gTrn/GrBZk/41wGofU0Day5H96THvq6dx44X9APYkf/ORPwb8RlT/BOMNMdsFhZoWMhKICRKHe5MByp4YLjr+1YsBtm4Tp0unoCVKFH6tkC4mb1ngWeliow3ynfEffDsfW+f5iTteo9uAsfHi9GYjVPqL4l1ouFucDkH9EFEN/wpuhDjDORcwpnRfji7VAS3nxWka8LgoCvbDWlPsxsJ4UXklgnW2c+nLQHK89GSeAQ/PEqfD0HBRFGeg3rnnD4J1mKhSgSecKZUGJD4iPZtpgWRTI9pbD8dFMdwKQ6XT07BPVGFfwU0vRz4eB2YEiScW2eEf3q4N8IQonoO50uERA6aLagpYas1pQs1g8cxOYJFpLzdoQrAcLJ1z03uQ4SOKSCusMG8Spb7iodCDkFzgeg5HqTnbBJOlXQwcFdUmKHNk4KBi2BooTgXbX0hf9/jkYaIXZcBEUwiK4IIoauAXHel1D8wURUgLvC6d5kLLK6aykV4B7RXxmmgdgUmmgGVBk9oW/wMVfp39uSFAFC9A8VnpEA1kiUN1Ew7WBP3NxQ7LTYnQAA+Kq7NWeKmzCiWKwmsSrHdUwC8hzcvxVAXQ8tHpD9ovKMGiswz+Lk674YoovoaP5Vt/1VSht8GWIh0mAK85+lMO0Lwn8Pa3PHYO7Fv0Nwwag1we69WR5iE4eHvisMB5UeyCg9Lpc1gmnR4F0rY5ciUZDojG83YIN80mgNqS5kCDn4hsAaNA3YH9ME86zALmOC7vFjhgagcvAVNFY4Nre/sSssRVoAGz26tAkSiuAQulQxIUeXd+2TEoc0m+l+G0aKTDYXGq0/wsE34oIqfhqiiehEpHNJLh56b6xSJ1mF4sGgnwtTjNh5uiWApT2g9jsCj2mQap3wIRzsOtrhMPFm/pagJMcs36VlE82r5YG0wTRSX8Tzr8CTIdFdEO25UrK3BWunobmsRpFhjqdw6FGyJB9q51OsgK4aYUvmAaZAqVIXcBoGvSPwVDnLYB6lEPB8NXIjQL1AJh0uHfUG3amk1dz6vNV9cOAFPmDwPUzjECGCThYFVjcy+MlQ4+hilCZV0r6hrIEI1wsIpTGBChJvvtpUvguuYAxTmqOvC8qZxEiqs98KpoTIVG5d8uFEU9REs1FH3Tu51GR1XecRz/zSQkgWFHEcgBTASRBtlll7WKyibFVkDBAnJEWgqyuPSltcW2p55S24PaorTsPYAGUTgssu8om2UHkS1BEgjJ5HsnAc7pi5nMM/fOMyFh8fN6zj1zn3nm//z+/ztjqaPLzGaihyJeh1BAbpdNwPauzFUZqUADSyFoqvfh9/IYiynEneGUIkZBM3nchE9k0RS2erZVijy2QD8dgrXyaAufK2I6LFLEUFgpt3PAXFm0dheiaeD45XEQDuljy2FcG3LNnbApmjZha3yT1UY2q6CrjCawVF758LFaw3DLCOGGKWFmQ34A78TXzFdk0xXauRd1mf0NfAJ/kMdf4LpPYV9DD7OzyfErVmA3/FY2w+AZdyMyUdaPYBtclEcjYKDC5mK2b0OgvvckcPrIwlcCT7kPx32ybsKOsFIe/hIYpbDqBSavVMnxjpGWw8OyOef53u8wR6rnazgE9sprMIw1b5Nd5jL0VaxF0FI2Xdynn/8MdJa1EDWG4jryOIKZYPwK8xlNgt9Ixt+A/rJZALNktAJaycMXgsaqCzSSRwac90eLuvkMhoT7qaijcEFW/3AveTfY7Zf1MPIVwUx5tAJOmtDFWdNPufb2Wpgnm7oOjJQxCYZL1uNYi2GovHKhpakE8L3p9fMVVa8YRslmM8wPyHgYustrenj9NsIAeb0AN+sozLcJTteKtlwzXKdmaZJsHnT3JQ1C0EJeLcN3Mw+6yusJBz5TxMggPO0L73rXlHUfTJTN40F3uznBtCnxofRJ6GRtrT71m/QYDtCqBUxR1AV4VTZH4UySjMMwS3G2QoakKeDssU2UTS4NDIeLke3Qo44r5+XJInDBHd2q5ZiLuRuT+yUlFcFz8vLnw+l6MgdCYaSPfVBR2XBTNh3ByZPxA+RUk1cWZKZFmtMRirO/CNOwPBMJBVtche9/8IUsAt95RjI/gZ8rTl84GJ7o2FPdKkwtOQyXJFUNuhbrrHmByzZggycgD1GcybCqLPUV11OctIcpm7P4T8PUcCQrSlbURXhM8Rpsh6fl7gtzffI6EISscPAuhc8U76NTwNtJkvZH0nB391rlQ2vFuwJFa2QMLLLGxglQmhadAL0ri7zTwLDe0uxIyV8Cy2Vcsp3xygDGeHLz9hTFOQyDzEi0pIYsHsgFnDdHD4fVkqqUuMvLQ3C1ijw6ZMKf0mQ0tj8K2XPddFz1CqC2bPYcJ+J34XbP+a+MWkEYK7eZ16Bwrgz/QWieZj0tSqqap0j8WnadOwGRE6i1t4d5Ca7td+fpUgi6dnw2MEHxNsKV2BgebCS7Kt/uKN27M0VmamAMLISrIxXV4A0Hil2LeS4HhvsVJ9WJzYwpVyFdCfkii7kdmsplmwPFb6dGrpneDCh9VDKStkBhquJ1h1MB13R5aYosvPnLe62MEMDgS8tXHMkFoHl/zzMne62o2gxWyXi2CNrqFtraSv+QNmBkjkj23iczZLEQCp71PLWbU0Xl+wI+VJzkXW2IOD/iPrlkO9h/spFy3ltCpjnQT+XrBLPN4n6bUUVh/vsXLjh8ZUX2eJ/cagJt6soiG4IPyOU/8NM0lee+2KCqfvCiylXnZeDqGlkktYHLcttvJvwJDIXd5h4HQehrlaPucOBUnmx6QihPHpehsK7KMQ8GmdvrART2UkLPnwaaN5RNwxy4bH2kfVjlGAzjYiM9UDJUdufOAvziLVm9BmfqK05NIEsJ7SmGFrEvnh8C3rUtWv/VRUCwpk9W3YBDild9E3SqqkR+CZkm6H4FC4aWAtcWpMql1pP5AGxpLLsTi2FwQBbrHFitRMbAZLONS+EDnfwGwFn/SItq4VsY/7P09SEAtrf1KYFL4PSW1U6gthLYCP+KHaGE6knVa5YQNn/OplMllMkde0KJTAV2yi75O9jdSlZJ1+HPZuBSNpdoMOAGHvOPfO9TQn8shYspSuBkJgyuIZu/Q+iAWQ6TzQLrXhxWRMTNienP1ZFR8R9rmZDFSz57s8Uys1SZ0ERG0vhRHbt07tC/nm7BdxxoqnK8AYyRxSxorzKjIFhNt6Ed8KXKk/YpOO8rjq9Z7P4cA+t1G44Cx5JVrlrvgLNZXmtcg5z1MEaV18WBObV0C+ObQfEES4ZdbOJMEEar0roFYW+qbqlXIRTVlot7itEEMpNVWduCcOakKmBDCYQekssO6Bk7ndyoyjrqwPV1qpB/XgPS/QnnjJ/DLlWOfwVwpoMqqNd24PgJRTUAnoiN9BtUKTU+BPaeVIU1XAlszTMFFKihiPdgb6Dyfxbp9FdVQp9jQOHzihgNhbEzvwWqjMdKgS2Pq1LS/g2w+kB09Lwodt4xUxV34hLAl8mqrIxM4GZWWQbeYtoDFvlVYZ0XA9ea6jb02go4l++T9KpJI30KYLYqKvU1gIvndFtSXg4BJQNSNM6M59Jhfg1VTFLPHMDZmaLbtWElwIXNI6KRvE8JTFKFpGS3ARjcW3cgbdw1gFB0Yt8eelRoP1ddeB7gzKGA7kyfV0IALAlPjQqgu24ttW8zgNCl+rpz/buGgPyynmJpNd3Cns07HIDg5TzdHXlXinmvbISdrXIdePTwdQAK9j2gu6fRFEkK5ILzQtYeJVAtq+/aIACcWtVId99bhDV/s2/tDR9VV5S/T+/pPWdsLSas9EpWQPdEeg6Gc6PTxWNLvlp/7JvtDkbpoB+q6p5JW9d9chEJFRxc9VSa7rWk17e1W7K4AJfiC/ntM3qn6cfjrz9tyISpGY8cHZvRtMnIVrf9v9T/A5V/WXlKPBueAAAAAElFTkSuQmCC" />
            </div>
            <p>Pinteres
            </p>
        </div>
        <div class="social">
            <div class="social_con">
                <img
                    src="data:image/png;base64,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" />
            </div>
            <p style="margin-top: 12px; line-height: 38px;">Linked-in
            </p>
        </div>

    </div>
    <div class="pd skills">
        <div class="head">SKILLS</div>
            <p>${data['skills'][0] ? data['skills'][0] : ''}</p>
            <p>${data['skills'][1] ? data['skills'][1] : ''}</p>
            <p>${data['skills'][2] ? data['skills'][2] : ''}</p>
            <p>${data['skills'][3] ? data['skills'][3] : ''}</p>
            <p>${data['skills'][4] ? data['skills'][4] : ''}</p>

    </div>
    <div class="pd education">
        <div class="head">EDUCATION</div>
        <p>${data['degree']}</p>
        <p>${data['course']}</p>
        <p style="text-overflow: ellipsis;">${data['clg-name']}</p>
        <p>${data['clg-district']}</p>

    </div>
</div>

<div class="data">
    <div class="profile-name">
        <p>
        ${data['first name']} ${data['last name']}
        </p>
    </div>
    <div class="role-head">
        <div class="role">
            ${data['expecting-role']}
        </div>
    </div>
    <div class="seperator"></div>
    <div class="dtls-head">
        <p>PROFILE</p>
    </div>
    <div class="prf-data">
        <p>
        ${data['about']}
        </p>
    </div>

    <div class="dtls-head">
        <p>EXPERIENCE</p>
    </div>
    <div class="prf-data">
        <div class="h1-head">
            Job Experience
            <div class="prv-job">${data['prev-role']}</div>
        </div>
        <p>
        ${data['prev-role'] === 'Fresher'
                ? `As a recent graduate in ${data['course']}, I am eager to start my career and apply my skills as ${data['expecting-role']}. I am enthusiastic about taking on new challenges and growing professionally while contributing to emerging technologies.`
                : `I worked as ${data['prev-role']} for ${data['experience']} years, gaining expertise and developing a strong foundation in this field. I am seeking new opportunities to apply my skills, collaborate with dynamic teams, and grow with emerging technologies.`
            }
        </p>
    </div>
    <div class="dtls-head">
        <p>SOFT SKILLS</p>
    </div>
    <div class="prf-data">
        <div class="h1-head">
            Speaking Skills
            <div class="prv-job">${data['soft-skill']}</div>
        </div>
        <p>
        ${data['soft-skill'] === 'Expert'
                ? 'I am skilled in English for soft skills, with strong communication abilities for professional and social situations. I confidently express ideas, listen actively, and adapt to different styles, focusing on building relationships and enhancing influence with emotional intelligence.'
                : data['soft-skill'] === 'Intermediate'
                    ? 'I have a decent level of proficiency in English for soft skills. I can communicate effectively in most situations, adapt moderately well to diverse contexts, and focus on improving relationship-building and emotional intelligence skills.'
                    : data['soft-skill'] === 'Beginner'
                        ? 'I am developing my English soft skills, aiming to build confidence in expressing ideas and understanding different communication styles. My focus is on learning basic skills to adapt and improve gradually in professional and social environments.'
                        : ''
            }
        </p>

    </div>
</div>
</div>

</div>
</div>
<style>
body {
font-family: 'Open Sans', sans-serif;
font-size: 18px;
letter-spacing: 0;
font-weight: 400;
line-height: 28px;
}

* {
margin: 0;
padding: 0;
}


.print1 {
width: 1050px;
margin: auto;
}

.header {
background-color: #848484;
padding: 100px;

}

.main-con {
position: relative;
top: -60px;
width: 90%;
margin: auto;

}

p {
word-break: break-word;
}

.con {
display: flex;
gap: 30px;
}

.data {
width: 100%;
}

.side-bar {
width: 28%;
background-color: #F7E0C1;
padding: 15px;
padding-bottom: 100px;
height: auto;
margin-top: -35px;
padding-top: 40px;
}


.img_con {
margin: auto;
width: 200px;
height: 200px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 100%;
overflow: hidden;
}

.view {
margin: auto;
width: 30%;
height: 30%;
display: flex;
justify-content: center;
align-items: center;
}

.view img {
width: 100%;
height: 100%;
object-fit: cover;
display: block;
}

.img_con img {
width: 100%;
height: 100%;
object-fit: cover;
display: block;
}

.social_con {
width: 30px;
height: 30px;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
}

.social_con img {
width: 30px;
height: 30px;
overflow: hidden;
}



.social p {
margin-left: 10px;
}

.social {
display: flex;
align-items: center;
margin: 0;
}

.pd {
width: 100%;
margin-top: 50px;
}

.pd p {
text-wrap: nowrap;
overflow: hidden;
text-overflow: ellipsis;
line-height: 40px;
}

.address {
margin-top: 50px;
}

.pd .head {
font-size: 18px;
letter-spacing: 4px;
font-weight: 600;
padding-bottom: 5px;
border-bottom: 3px solid #888;
text-transform: uppercase;
}



.profile-name {
margin-top: 10px;
color: #fff;
margin-bottom: 45px;

}

.profile-name p {
text-align: center;
font-family: 'Raleway', sans-serif;
font-size: 32px;
letter-spacing: 8px;
font-weight: 600;
text-transform: uppercase;
}

.role-head .role {
font-family: 'Open Sans', sans-serif;
font-size: 23px;
letter-spacing: 5px;
font-weight: 600;
line-height: 40px;
color: black;
text-align: center;
text-transform: uppercase;
margin-bottom: 13px;
}

.data .seperator {
width: 240px;
height: 2px;
background-color: #999;
margin: auto;
}

.dtls-head {
display: flex;
justify-content: center;
width: 100%;

}

.dtls-head p {
margin-top: 18px;
padding: 6px;
width: 70%;
text-align: center;

background-color: #ddd;
font-size: 18px;
letter-spacing: 6px;
font-weight: 600;
}

.h1-head {
font-size: 18px;
letter-spacing: 1px;
font-weight: 600;
line-height: 28px;
color: black;
padding: 10px;
padding-bottom: 0px;
padding-left: 0px;
}

.prv-job {
color: #777;
line-height: 40px;
}

.prf-data {
margin-top: 25px;
line-height: 35px;margin-bottom: 25px;}</style>`
    },
    {
        temp_id: 1522,
        temp: `
<div id="content-to-print" class='print'>
<div class="con">
<div class="header">
<div class="name-sec">
    <h1>${data['first name']} ${data['last name']}</h1>
    <div class="about">
        <p>${data['about']}</p>
    </div>
</div>

<div class="img_con">
    <img src="${data['profile']}"
        alt="">
</div>
</div>

<div class="data">
<div class="side-bar">
    <div class="skills">
        <h3>Skills</h3>
            <li style="list-style:none">${data['skills'][0] ? data['skills'][0] : ''}</li>
            <li style="list-style:none">${data['skills'][1] ? data['skills'][1] : ''}</li>
            <li style="list-style:none">${data['skills'][2] ? data['skills'][2] : ''}</li>
            <li style="list-style:none">${data['skills'][3] ? data['skills'][3] : ''}</li>
            <li style="list-style:none">${data['skills'][4] ? data['skills'][4] : ''}</li>
    </div>

    <div class="pd socail">
        <h3>Social</h3>
        <li>Twitter</li>
        <li>Pinterest</li>
        <li>Linked-in</li>
    </div>
    <div class="pd address">
        <h3>Address</h3>
        <li>${data['ad-line-1']}</li>
        <li>${data['ad-line-2']}</li>
        <li>${data['district']}</li>
        <li>${data['state']}</li>
</div>
    <div class="pd address">
        <h3>Contact</h3>
        <li>${data['first name']} ${data['last name']}</li>
        <li>${data['number']}</li>
        <li>${data['email']}</li>
    </div>
</div>


<div class="seperator"></div>
<div class="profile">
    <div class="education">
        <h3>Education</h3>
        <p>${data['degree']}</p>
        <p>${data['course']}</p>
        <p style="text-overflow: ellipsis;">${data['clg-name']}</p>
        <p>${data['clg-district']}</p>
    </div>
    <div class="pd Experience">
        <div class="exp">
            <h3>Experience</h3>
            <span>${data['prev-role']}</span>
            <p>
${data['prev-role'] === 'Fresher'
                ? `As a recent graduate in ${data['course']}, I am eager to start my career and apply my skills as ${data['expecting-role']}. I am enthusiastic about taking on new challenges and growing professionally while contributing to emerging technologies.`
                : `I worked as ${data['prev-role']} for ${data['experience']} years, gaining expertise and developing a strong foundation in this field. I am seeking new opportunities to apply my skills, collaborate with dynamic teams, and grow with emerging technologies.`
            }
            </p>
        </div>
    </div>
    <div class="pd Experience">
        <div class="exp">
            <h3>Soft Skills</h3>
            <span>${data['soft-skill']}</span>
            <p>
        ${data['soft-skill'] === 'Expert'
                ? 'I am skilled in English for soft skills, with strong communication abilities for professional and social situations. I confidently express ideas, listen actively, and adapt to different styles, focusing on building relationships and enhancing influence with emotional intelligence.'
                : data['soft-skill'] === 'Intermediate'
                    ? 'I have a decent level of proficiency in English for soft skills. I can communicate effectively in most situations, adapt moderately well to diverse contexts, and focus on improving relationship-building and emotional intelligence skills.'
                    : data['soft-skill'] === 'Beginner'
                        ? 'I am developing my English soft skills, aiming to build confidence in expressing ideas and understanding different communication styles. My focus is on learning basic skills to adapt and improve gradually in professional and social environments.'
                        : ''
            }
            </p>
        </div>
    </div>


</div>
</div>
</div>
</div>
<style>
* {
margin: 0;
padding: 0;
font-family: sans-serif;
letter-spacing: 1px;

}

.header {
display: flex;
justify-content: space-between;
}

.name-sec {
flex-basis: 500px;
}

.name-sec h1 {
text-transform: uppercase;
color: #0101d2;
letter-spacing: 3px;
}
p{
word-break:break-word;
}

.profile {
padding: 30px;
}

.pd span {
color: #777;
}

.pd li {
list-style: none;
}

.pd {
margin-top: 20px;
line-height: 35px;

}
.address li{
text-overflow: ellipsis;
overflow: hidden;
}
.about{
margin-top: 10px;
line-height: 35px;
}
.pd h3,
.education h3 {
color: #0101d2;
padding-top: 5px;
padding-bottom: 5px;
letter-spacing: 1.5px;
}
.education p {
line-height: 25px;

}
.seperator {
border: 2px solid rgb(182, 97, 0);
border-radius: 100%;
}

.side-bar {
width: 28%;
padding: 30px;
padding-bottom: 100px;
}

.side-bar h3 {
padding: 5px;
color: #0101d2;
letter-spacing: 1.5px;
}

.side-bar li {
margin-left: 23px;
}

.side-bar .skills li {
line-height: 30px;
}
.img_con {
width: 170px;
height: 170px;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
}
.img_con img {
width: 100%;
height: 100%;
object-fit: cover;
display: block;
}
.contact {
text-align: end;
line-height: 28px;
}
.data {
display: flex;
}
#content-to-print {
background-color: #ececec;
padding: 70px;
padding-bottom: 320px;
width: 880px;
}
</style>`
    }
]

