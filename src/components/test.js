<section className="bg-primary zigzag " id="playlist-form">
    <div className="">
        <div className="">
            <div className="">
                <h3 className="section-heading text-white">Have a favorite song? Reccomendation?</h3><br />

                <form className="cf" onSubmit={this.addToList}>
                    <div className="half left cf">

                        <input onChange={this.handleInputChange} value={userName} type="text" className="form-control" name="userName" placeholder="Enter your name" />
                        <input onChange={this.handleInputChange} value={songArtist} type="text" className="form-control" name="songArtist" placeholder="Artist or Band" />
                        <input onChange={this.handleInputChange} value={songTitle} type="text" className="form-control" name="songTitle" placeholder="Song Title" />
                    </div>
                    <div className="half right cf">

                        <textarea onChange={this.handleInputChange} value={songNotes} type="text" className="form-control" name="songNotes" placeholder="Comments"></textarea>
                    </div>

                    <button id="form-button" type="submit" className="btn btn-default btn-md">Add Song!</button>
                </form>
            </div>
        </div>
    </div>
</section>